require('./database')


const express = require('express')
const app = express()
const serv = require('http').Server(app)
const port = process.env.PORT || 3000
const serverMSG = '[server] '

var sessionList = []
var maps = []

//img types
var SVGfile = ".svg"
var PNGfile = ".png"
var JPGfile = ".jpg"
var GIFfile = ".gif"

var terrainMapCSS = "_terrain"
var politicalMapCSS = "_political"
var urlCSSinMaps = "url(/client/img/maps/"
var urlCSSout = ")"
var nationData = {
    //england
    england: {
        wealth: 2500,
        income: 40,
        forces: {
            army: 200,
            navy: 10,
        },
        mults: {
            army: {
                attack: {
                    headOn: 1,
                    ambush: 1.25,
                    suprise: 1.5,
                },
                defense: 0.75,
                siege: 0.35,
            },
        },
    },
    //france
    france: {
        wealth: 3000,
        income: 50,
        forces: {
            army: 100,
            navy: 5,
        },
        mults: {
            army: {
                attack: {
                    headOn: 1,
                    ambush: 1.25,
                    suprise: 1.5,
                },
                defense: 0.75,
                siege: 0.35,
            },
        },
    },
    //default values
    default: {
        wealth: 3000,
        income: 50,
        forces: {
            army: 100,
            navy: 5,
        },
        mults: {
            army: {
                attack: {
                    headOn: 1,
                    ambush: 1.25,
                    suprise: 1.5,
                },
                defense: 0.75,
                siege: 0.35,
            },
        },
    },
}




let serverInfo = {
    currentPlayers: {
        online: 0,
        inGame: 0,
    },
    signedUpPlayers: 0,
    serverMax: 128,
}

var Entity = function() {
    var self = {
        id: "",
    }
    return self
}

var playerData = function(param) {
    var self = Entity(param)
        self.number = "" + Math.floor(4 * Math.random())
        self.username = param.username
        self.icon = param.icon
    var civ = {
        england: false,
        france: false,
        spain: false,
        dutch: false,
    }
    var states = {
        login: true,
        lobby: false,
        civSelect: false,
        game: {
            general: false,
            victory: false,
            defeat: false,
        },
    }
    return self
    return civ
    return states
}

app.get('/', function(req, res) {

    res.sendFile(__dirname + '/client/main.html')
})
app.use('/client', express.static(__dirname + '/client'))

serv.listen(port)
console.clear()
console.log('Colonial Warfare server => initialized!')
console.log('CWserver HostPort: ' + port)

var SOCKET_LIST = {}
playerData.list = {}


//connection
playerData.onConnect = function(socket, username, icon, repPoints) {
    var player = playerData({
        repPoints: repPoints,
        icon: "url(/client/img/UI/playerIcons/Anim/mus_gotAnim.gif)",
        username: username,
        id:socket.id,
        readyMSG: "<div style='color: white;'>Not ready</div>",
        nation: "waiting",
    })
    


    socket.on('createSession', function() {
        function  testSession() {
            console.log(sessionList)
            for(let i = 0; i < sessionList.length; i++) {
                if(sessionList[i].creator.id === socket.id) {
                    console.log(socket.id)
                    return
                }
            }
            sessionList.push({
                creator: player,
                playerCountMax: 4,
                playerMSGname: player.username,
                players: [player],
                playerIcons: player.icon,
                map: "enetivia",
                playersReady: 0,
             })
             sessionList[sessionList.length - 1].creator.id = socket.id
             socket.broadcast.emit('clientSessionListUpdate', sessionList)
        }
        testSession()
    })
    socket.on('requestSessionUpdate', function() {
        socket.emit('clientSessionListUpdate', sessionList)
    })
    socket.on('joinSession', function(data) {
        if(sessionList[data].players.length < sessionList[data].playerCountMax && sessionList[data].creator != player) {
            let checker = false
            for(let i = 0; i < sessionList[data].players.length; i++) {
                if(sessionList[data].players[i].username === player.username) {
                    checker = true
                }
            }
            if(!checker) {
                sessionList[data].players.push(player)
            }
        }
        socket.broadcast.emit('clientSessionListUpdate', sessionList)
    })
    socket.on('selectNation', function(nation, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].players[i].username === player.username) {
                sessionList[index].players[i].nation = nation
                socket.broadcast.emit('clientSessionListUpdate', sessionList)
            }
        }
    })
    socket.on('changeIcon', function(icon, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].players[i].username === player.username) {
                sessionList[index].players[i].icon = icon
                socket.broadcast.emit('clientSessionListUpdate', sessionList)
            }
        }
    })
    socket.on('changeMap', function(mapFile, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            sessionList[index].map = mapFile
            socket.broadcast.emit('clientSessionListUpdate', sessionList)
        }
    })
    socket.on('playerReadyUp', function(readyMSG, readyState, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].players[i].username === player.username) {
                sessionList[index].playersReady++
                sessionList[index].players[i].readyMSG = readyMSG
                console.log(readyMSG)
                socket.broadcast.emit('clientSessionListUpdate', sessionList)
            }
        }
    })

    socket.emit('getRepPoints', player.repPoints)
    socket.emit('getProfileIcon', player.icon)
    socket.emit('usernameInput', player.username)
    socket.emit('getOnlinePlayers', serverInfo.currentPlayers.online)
    serverInfo.currentPlayers.online++
    if(serverInfo.currentPlayers.online <= 0) {
        serverInfo.currentPlayers.online = 0
    }
    
    exports.playerName = player.username

    console.log(serverMSG + '(' + player.username + ')' + " has logged in!")
    console.log(serverMSG + "Current players (online): " + serverInfo.currentPlayers.online)
    

    socket.on('sendMsgToServer', function(data) {
        let adminChatCMD = '--admin'
        for(var i in SOCKET_LIST) {
            if(player.username != 'The Creator') {
                SOCKET_LIST[i].emit('addToChat', '[' + player.username + '] ' + data)
            }
            if(player.username == 'The Creator') {
                SOCKET_LIST[i].emit('addToChat', '<div style="color: yellow;">[' + player.username + '] ' + data)
            }
            if(data == (adminChatCMD + '[bigBrother]') && player.username == 'The Creator') {
                SOCKET_LIST[i].emit('addToChat', '<div style="color: turquoise;"><div style="font-weight:bold; display: inline-block;">[server]</div> The Creator wants you to know he is watching you all...</div>')
            }
        }
    })
}
playerData.onDisconnect = function(socket) {
    serverInfo.currentPlayers.online--
    if(serverInfo.currentPlayers.online <= 0) {
        serverInfo.currentPlayers.online = 0
    }
    console.log(serverMSG + "Current players (online): " + serverInfo.currentPlayers.online)
    delete playerData.list[socket.id]
}



var io = require('socket.io') (serv,{})
io.sockets.on('connection', function(socket) {
    socket.id = Math.random()
    SOCKET_LIST[socket.id] = socket

    socket.on('disconnect', function() {
        delete SOCKET_LIST[socket.id]
        playerData.onDisconnect(socket)
    })
    socket.on('evalServer', function(data) {
        var res = eval(data)
        socket.emit('evalAnswer', res)
    })

    //log in functions
    socket.on('signIn', function(data) {
        Database.passwordValidCheck(data, function(res) {
            if(res) {
                playerData.onConnect(socket, data.username, data.icon)
                socket.emit('signInResponse', {success:true,})
            } else {
                socket.emit('signInResponse', {success:false})      
            }
        })
    })
    socket.on('signUp', function(data) {
        Database.usernameAvailabilityCheck(data, function(res) {
            if(res) {
                socket.emit('signUpResponse', {success:false})
            } else {
                Database.addUser(data, function() {
                    socket.emit('signUpResponse', {success:true}) 
                    serverInfo.signedUpPlayers++
                    console.log(serverMSG + "New player has signed up!")
                    console.log(serverMSG + "Current players (signed up): " + serverInfo.signedUpPlayers)
                })     
            }
        })
    })
})  




// if(serverInfo.currentPlayers < serverInfo.maxPlayers) {
//     console.log(serverMSG + 'Socket connection')
//     serverInfo.currentPlayers++
//     console.log(serverMSG + 'Current players on server => ' + serverInfo.currentPlayers)
//     }
//     if(serverInfo.currentPlayers == serverInfo.maxPlayers) {
//         console.log(serverMSG + 'Game ready to begin!')
//     }
//     // if(serverInfo.currentPlayers > serverInfo.maxPlayers) {
//     //     console.log('Max players reached! Wait for someone to disconnect or wait for match to be over to connect.')
//     // }

//     if(serverInfo.currentPlayers == 0) {
//         console.log(serverMSG + 'Server Empty')
//     }
//     socket.on('disconnect', (reason) => {
//         console.log(serverMSG + 'Client disconnected')
//         serverInfo.currentPlayers--
//         console.log(serverMSG + 'Current players on server => ' + serverInfo.currentPlayers)
//       });



