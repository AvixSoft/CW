var socket = io()
var login_HTML = document.getElementById('login')
var loginScreen = document.getElementById('loginScreen')
var loginScreen_label = document.getElementById('loginScreen-label')
var loginScreen_usernameBar = document.getElementById('loginScreen-usernameBar')
var loginScreen_usernameBar__text = document.getElementById('loginScreen-usernameBar--text')
var loginScreen_usernameBar__input = document.getElementById('loginScreen-usernameBar--input')
var loginScreen_passwordBar = document.getElementById('loginScreen-passwordBar')
var loginScreen_passwordBar__text = document.getElementById('loginScreen-passwordBar--text')
var loginScreen_passwordBar__input = document.getElementById('loginScreen-passwordBar--input')
var loginScreen_buttons = document.getElementById('loginScreen-buttons')
var loginScreen_buttons__logIn = document.getElementById('loginScreen-buttons--logIn')
var loginScreen_buttons__signUp = document.getElementById('loginScreen-buttons--signUp')
var loginScreen_MSG = document.getElementById('loginScreen-MSG')
var lobbyScreen_HTML = document.getElementById('lobbyScreen')
var lobbyScreen_menu = document.getElementById('lobbyScreen-menu')
var chat_HTML = document.getElementById('chat')
var chat_box = document.getElementById('chat-box')
var chat_form = document.getElementById('chat-form')
var chat_input = document.getElementById('chat-input')
var lobbyScreen_playerBox__playerInfo___name = document.getElementById('lobbyScreen-playerBox--playerInfo---name')
var lobbyScreen_menu__campaign = document.getElementById('lobbyScreen-menu--campaign')
var lobbyScreen_menu__findMatch = document.getElementById('lobbyScreen-menu--findMatch')
var lobbyScreen_menu__tournaments = document.getElementById('lobbyScreen-menu--tournaments')
var lobbyScreen_menu__alliances = document.getElementById('lobbyScreen-menu--alliances')
var lobbyScreen_menu__info = document.getElementById('lobbyScreen-menu--info')
var lobbyScreen_box__news = document.getElementById('lobbyScreen-box--news')
var lobbyScreen_box__updates = document.getElementById('lobbyScreen-box--updates')
var lobbyScreen_box__homeCity = document.getElementById('lobbyScreen-box--homeCity')
var lobbyScreen_box__match = document.getElementById('lobbyScreen-box--match')
var matchSession_lobbyBox = document.getElementById('matchSession-lobbyBox')
var createMatchButton = document.getElementById('createMatchButton')
var refreshMatchButton = document.getElementById('refreshMatchButton')
var lobbyScreen_playerBox__playerIcon___icon = document.getElementById('lobbyScreen-playerBox--playerIcon---icon')
var inMatch_buttons = document.getElementById('inMatch-buttons')
var actaulSessions = document.getElementById('actaulSessions')
var leaveMatchButton = document.getElementById('leaveMatchButton')
var readyMatchButton = document.getElementById('readyMatchButton')
var matchSession_inSession__playerBox1___playerIcon = document.getElementById('matchSession-inSession--playerBox1---playerIcon')
var matchSession_inSession__playerBox1___playerName = document.getElementById('matchSession-inSession--playerBox1---playerName')
var matchSession_lobby = document.getElementById('matchSession-lobby')
var matchSession_inSession = document.getElementById('matchSession-inSession')
var matchSession_inSession__mapBox___info = document.getElementById('matchSession-inSession--mapBox---info')
var matchSession_inSession__mapBox___name = document.getElementById('matchSession-inSession--mapBox---name')
var find_and_create_matchButtons = document.getElementById('find-and-create-matchButtons')
var sessionStatus_info = document.getElementById('sessionStatus-info')
var chat_input__send = document.getElementById('chat-input--send')
var lobbyScreen_playerBox__playerIcon = document.getElementById('lobbyScreen-playerBox--playerIcon')
var iconPicker = document.getElementById('iconPicker')
var iconPicker_close = document.getElementById('iconPicker-close')
var matchSession_inSession__mapBox__selectLeft = document.getElementById('matchSession-inSession--mapBox--selectLeft')
var matchSession_inSession__mapBox__selectRight = document.getElementById('matchSession-inSession--mapBox--selectRight')
var game_loadingScreen = document.getElementById('game-loadingScreen')
var game_loadingScreen__loadingBox = document.getElementById('game-loadingScreen--loadingBox')
var game_loadingScreen__loadingBox___loadingBar = document.getElementById('game-loadingScreen--loadingBox---loadingBar')

//nationButtons
var nationButtons = {
    "england": document.getElementById("nationsBox-englandBox"),
    "france": document.getElementById("nationsBox-franceBox"),
    "spain": document.getElementById("nationsBox-spainBox"),
    "prussia": document.getElementById("nationsBox-prussiaBox"),
    "dutch": document.getElementById("nationsBox-dutchBox"),
    "portugal": document.getElementById("nationsBox-portugalBox"),
    "russia": document.getElementById("nationsBox-russiaBox"),
    "ottoman": document.getElementById("nationsBox-ottomanBox"),
}
var nationFlagCovers = {
    "england": document.getElementById("englandBox-flagSelected"),
    "france": document.getElementById("franceBox-flagSelected"),
    "spain": document.getElementById("spainBox-flagSelected"),
    "prussia": document.getElementById("prussiaBox-flagSelected"),
    "dutch": document.getElementById("dutchBox-flagSelected"),
    "portugal": document.getElementById("portugalBox-flagSelected"),
    "russia": document.getElementById("russiaBox-flagSelected"),
    "ottoman": document.getElementById("ottomanBox-flagSelected"),
}
var nationPlayerLabel = {
    "england": document.getElementById("englandBox-flagOwner"),
    "france": document.getElementById("franceBox-flagOwner"),
    "spain": document.getElementById("spainBox-flagOwner"),
    "prussia": document.getElementById("prussiaBox-flagOwner"),
    "dutch": document.getElementById("dutchBox-flagOwner"),
    "portugal": document.getElementById("portugalBox-flagOwner"),
    "russia": document.getElementById("russiaBox-flagOwner"),
    "ottoman": document.getElementById("ottomanBox-flagOwner"),
}
var playerFlags = {
    "england": "url(/client/img/UI/flags/englandFlag.png)",
    "france": "url(/client/img/UI/flags/franceFlag.png)",
    "spain": "url(/client/img/UI/flags/spainFlag.png)",
    "prussia": "url(/client/img/UI/flags/prussiaFlag.png)",
    "dutch": "url(/client/img/UI/flags/dutchFlag.png)",
    "portugal": "url(/client/img/UI/flags/portugalFlag.png)",
    "russia": "url(/client/img/UI/flags/russianFlag.png)",
    "ottoman": "url(/client/img/UI/flags/ottomanFlag.png)",
}
var playerSideFlags = {
    "england": "url(/client/img/UI/flags/sideIcons/england.png)",
    "france": "url(/client/img/UI/flags/sideIcons/france.png)",
    "spain": "url(/client/img/UI/flags/sideIcons/spain.png)",
    "prussia": "url(/client/img/UI/flags/sideIcons/prussia.png)",
    "dutch": "url(/client/img/UI/flags/sideIcons/dutch.png)",
    "portugal": "url(/client/img/UI/flags/sideIcons/portugal.png)",
    "russia": "url(/client/img/UI/flags/sideIcons/russia.png)",
    "ottoman": "url(/client/img/UI/flags/sideIcons/ottoman.png)",
}
var playerIconButtons = {
    "1": document.getElementById("iconPicker-iconBox1"),
    "2": document.getElementById("iconPicker-iconBox2"),
    "3": document.getElementById("iconPicker-iconBox3"),
}
var playerIcons = {
    "1": "url(/client/img/UI/playerIcons/Anim/mus_gotAnim.gif)",
    "2": "url(/client/img/UI/playerIcons/Anim/blonde_blueAnim.gif)",
    "3": "url(/client/img/UI/playerIcons/Anim/beard_cigarAnim.gif)",
}
var mapSelectButtons = {
    "enetivia": document.getElementById("mapPicker-enetiviaBox"),
    "vespazium": document.getElementById("mapPicker-vespaziumBox"),
}

music.lobby.main.volume = 0.15
clicks.average.volume = 1
clicks.light.volume = 1

//other stuff
var userIcon = null
var screenRender = null
var sessionList = []
var sessionIndex = -1
var playersReadyInMATCH = 0
var clientProfileIcon = null
var clientsOnline = null
var clientUsername = null

socket.on('usernameInput', function(username) {
    clientUsername = username
})
socket.on('getOnlinePlayers', function(online) {
    clientsOnline = online
})
socket.on('getProfileIcon', function(icon) {
    clientProfileIcon = icon
})

//Log In
loginScreen_buttons__logIn.onclick = function() {
    socket.emit('signIn',{username:loginScreen_usernameBar__input.value, password:loginScreen_passwordBar__input.value})
}
loginScreen_buttons__signUp.onclick = function() {
    socket.emit('signUp',{username:loginScreen_usernameBar__input.value, password:loginScreen_passwordBar__input.value})
}
socket.on('signInResponse', function(data) {
    if(data.success) {
        loginScreen_MSG.style.color = "white"
        loginScreen_MSG.innerHTML = "Welcome back!"
        document.body.style.animation = "fadeLobby 4s forwards"
        music.lobby.main.loop = true
        music.lobby.main.play()
        setTimeout(enter_Lobby, 2000)
    } else {
        loginScreen_MSG.style.color = "red"
        loginScreen_MSG.innerHTML = "&#9888 Username or password invalid."
    }
    clicks.average.play()
})
socket.on('signUpResponse', function(data) {
    if(data.success) {
        loginScreen_MSG.style.color = "white"
        loginScreen_MSG.innerHTML = "You must log in now to play."
        loginScreen_usernameBar__input.value = ""
        loginScreen_passwordBar__input.value = ""
    } else {
        loginScreen_MSG.style.color = "red"
        loginScreen_MSG.innerHTML = "&#9888 Username taken."
        loginScreen_usernameBar__input.value = ""
        loginScreen_passwordBar__input.value = ""
    }
    clicks.average.play()
})
createMatchButton.onclick = function(data) {
    socket.emit('createSession')
    clicks.light.play()
}
refreshMatchButton.onclick = function(data) {
    socket.emit('requestSessionUpdate')
    clicks.light.play()
}
lobbyScreen_menu__findMatch.onclick = function() {
    socket.emit('requestSessionUpdate')
    sessionStatus_info.innerHTML = "(" + sessionList.length + ") matches in session."
    clicks.average.play()
}
lobbyScreen_playerBox__playerIcon.onclick = function() {
    iconPicker.style.display = "inline-block"
    clicks.light.play()
}
document.getElementById('matchSession-inSession--mapBox').onclick = function() {
    document.getElementById('mapPicker').style.display = "inline-block"
    clicks.light.play()
}
document.getElementById('mapPicker-close').onclick = function() {
    document.getElementById('mapPicker').style.display = "none"
    clicks.average.play()
}
iconPicker_close.onclick = function() {
    iconPicker.style.display = "none"
    clicks.light.play()
}

function nationSelectRefreshCLIENT() {
	for(flag in nationFlagCovers) {
        nationFlagCovers[flag].style.display = "none"
    }
}

socket.on('clientSessionListUpdate', function(thisSession, thisMap) {
    sessionList = thisSession
    maps = thisMap
    if(screenRender === 'inSession') {
        nationSelectRefreshCLIENT()
        var index = sessionIndex
        var mapPicked = 0
        actaulSessions.style.display = "none"
        matchSession_inSession.style.display = "inline-block"
        find_and_create_matchButtons.style.display = "none"
        inMatch_buttons.style.display = "inline-block"
        sessionStatus_info.innerHTML = "This match has " + sessionList[index].players.length + "/" + sessionList[index].playerCountMax + " players (" + sessionList[index].playersReady + " ready)"
        matchSession_inSession__mapBox___info.innerHTML = "<div style='color: white;'><div style='color: grey;'>Type: " + sessionList[index].mapType + "</div>" + sessionList[index].mapInfo + "<div style='color: turquoise;'>Colonies: " + sessionList[index].mapColonies + "</div></div>"
		for(let j = 0; j < sessionList[index].players.length; j++) {
            console.log((j + 1).toString())
            console.log(userIcon)
            document.getElementById('matchSession-inSession--playerBox' + (j + 1).toString() + '---playerIcon').style.backgroundImage = sessionList[index].players[j].icon
            document.getElementById('matchSession-inSession--playerBox' + (j + 1).toString() + '---playerName').innerHTML = sessionList[index].players[j].username
        }
        for(nation in nationButtons) {
            nationButtons[nation].onclick = function() {
                nationSelectRefreshCLIENT()
                let nationName = this.id
                nationName = nationName.slice(0, nationName.length -3) 
                nationName = nationName.slice(11, nationName.length) 
                console.log(nationName)
                socket.emit('selectNation', nationName, sessionIndex)
            }
            clicks.average.play()
        }
        for(icon in playerIconButtons) {
            playerIconButtons[icon].onclick = function() {
                let iconName = this.id
                iconName = iconName.slice(18, iconName.length) 
                console.log(iconName)
                socket.emit('changeIcon', iconName, sessionIndex)
            }
        }
        for(icon in playerIconButtons) {
            playerIconButtons[icon].onclick = function() {
                let iconName = this.id
                iconName = iconName.slice(18, iconName.length) 
                console.log(iconName)
                socket.emit('changeIcon', iconName, sessionIndex)
            }
        }
        for(mapSelected in mapSelectButtons) {
            mapSelectButtons[mapSelected].onclick = function() {
                let mapName = this.id
                mapName = mapName.slice(0, mapName.length -3) 
                mapName = mapName.slice(10, mapName.length) 
                console.log(mapName)
                socket.emit('changeMap', mapName, sessionIndex)
            }
        }
        if(sessionList[index].players.length === sessionList[index].playerCountMax) {
            sessionStatus_info.innerHTML = "&#9888 Match is full. No one else may join unless someone leaves."
        }
        readyMatchButton.onclick = function() { 
            for(let i = 0; i < sessionList[index].players.length; i++) {
                let clicked = 0
                let readyState = 0
                let curPlayer = sessionList[index].players[i]
                if(curPlayer.nation != undefined) {
                    clicked+=1
                    readyMatchButton.style.display = "none"
                    leaveMatchButton.style.marginLeft = "10px"
                    let readyPlayerIND = "<div style='color: turquoise;'>Ready</div>"
                    socket.emit('playerReadyUp', readyPlayerIND, readyState, sessionIndex)
                    sessionStatus_info.innerHTML = "This match has " + sessionList[index].players.length + "/" + sessionList[index].playerCountMax + " players (" + sessionList[index].playersReady + " ready)"
                }
                if(curPlayer.nation === undefined) {
                    sessionStatus_info.innerHTML = "You must pick a nation before you ready!"
                }
                if(clicked === 1){
                    console.log("too many")
                    sessionStatus_info.innerHTML = "This match has " + sessionList[index].players.length + "/" + sessionList[index].playerCountMax + " players (" + sessionList[index].playersReady + " ready)"
                }
            }
            clicks.light.play()

        }
        lobbyScreen_menu__findMatch.onclick = function() {
            sessionStatus_info.innerHTML = "&#9888 You are already in a match. You can leave to find another."
        }
        for(let i = 0; i < sessionList[index].players.length; i++) {
            let curPlayer = sessionList[index].players[i]
            if(curPlayer.nation) {
                nationFlagCovers[curPlayer.nation].style.display = "inline-block"
                nationPlayerLabel[curPlayer.nation].innerHTML = curPlayer.username
                document.getElementById("lobbyScreen-playerBox--playerIcon---icon").style.backgroundImage = playerIcons[curPlayer.icon]
                document.getElementById("matchSession-inSession--playerBox" + (i + 1).toString() + "---playerCivIMG").style.backgroundImage = playerFlags[curPlayer.nation]
            }
        }
        for(let i = 0; i < sessionList[index].players.length; i++) {
            let curSession = sessionList[index]
            document.getElementById("matchSession-inSession--mapBox---icon").style.backgroundImage = mapFiles[curSession.map]
            document.getElementById("matchSession-inSession--mapBox---name").innerHTML = mapNames[curSession.map]
            document.getElementById("matchSession-inSession--mapBox---info").innerHTML = mapInfo[curSession.map]
        }    
        for(let i = 0; i < sessionList[index].players.length; i++) {
            let curPlayer = sessionList[index].players[i]
            if(curPlayer.icon) {
                document.getElementById("matchSession-inSession--playerBox" + (i + 1).toString() + "---playerIcon").style.backgroundImage = playerIcons[curPlayer.icon]
            }
        }
        for(let i = 0; i < sessionList[index].players.length; i++) {
            let curPlayer = sessionList[index].players[i]
            if(curPlayer.readyMSG) {
                document.getElementById("matchSession-inSession--playerBox" + (i + 1).toString() + "---playerReady").innerHTML = curPlayer.readyMSG
            }
        }
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].playersReady === sessionList[index].players.length) {
                sessionStatus_info.innerHTML = "&#9888 Game starting..."
                document.body.style.animation = "fadeGameLoad 4s forwards"
                music.lobby.main.pause()
                music.loading.main.loop = true
                music.loading.main.volume = 0.5
                music.loading.main.play()
                let gameMap = sessionList[index].map
                let curPlayer = sessionList[index].players[i]
                setTimeout(enter_GameLoad_STATE, 2000)
                document.getElementById('game-loadingScreen--nationBox---leftIMG').style.backgroundImage = playerSideFlags[curPlayer.nation]
                document.getElementById('game-loadingScreen--nationBox---infoBox----nationName').innerHTML = curPlayer.nation
                document.getElementById('game-loadingScreen--nationBox---infoBox----nationInfo').innerHTML = nationDesc[curPlayer.nation]
                setTimeout(function() {
                    let nationVO = nationIntros[curPlayer.nation]
                    nationVO.volume = 1
                    nationVO.play()  
                }, 3000)
            }
        }
    } else {
        lobbyScreen_menu__findMatch.onclick = function() {
            sessionStatus_info.innerHTML = "(" + sessionList.length + ") matches in session."
            clicks.average.play()
		}
        actaulSessions.innerHTML = ''
        for(let i = 0; i < sessionList.length; i++) {
            actaulSessions.innerHTML += '<button id="' + (i + 1).toString() + '" class="matchLabel"> Host: <div style="font-weight: bold; display: inline-block;">' + sessionList[i].creator.username + '</div> | Players: <div style="font-weight: bold; display: inline-block;">' + sessionList[i].players.length + '/' + sessionList[i].playerCountMax + '</div> | Map: <div style="font-weight: bold; display: inline-block;">' + sessionList[i].map + '</div></button><br>'
            document.getElementById(i + 1).addEventListener("click", function() {
                if(sessionList[i].players.length < sessionList[i].playerCountMax) {
                    socket.emit('joinSession', i)
                    screenRender = 'inSession'
                    sessionIndex = i
                } else {
                    sessionStatus_info.innerHTML = "&#9888 Match is full. All must ready up to begin game."
                }
            })
        }
    }
})

socket.on('addToChat', function(data) {
    chat_box.innerHTML += '<div>' + data + '</div>'
})

socket.on('evalAnswer', function(data) {
    console.log(data)
})
chat_form.onsubmit = function(e) {
    e.preventDefault()
    if(chat_input.value[0] === '/') {
        socket.emit('evalServer', chat_input.value.slice(1))
    } else {
        socket.emit('sendMsgToServer', chat_input.value)
        chat_input.value = ''
    }
    clicks.MSG.play()
}

chat_input__send.onclick = function() {
    if(chat_input.value[0] === '/') {
        socket.emit('evalServer', chat_input.value.slice(1))
    } else {
        socket.emit('sendMsgToServer', chat_input.value)
        chat_input.value = ''
    }
    clicks.MSG.play()
}


function enter_Lobby() {
    console.log(clientProfileIcon)
    lobbyScreen_playerBox__playerIcon___icon.style.backgroundImage = clientProfileIcon
    lobbyScreen_playerBox__playerInfo___name.innerHTML = "☆ " + clientUsername
    login_HTML.style.display = "none"
    lobbyScreen_HTML.style.display = "inline-block"
}
function enter_GameLoad_STATE() {
    lobbyScreen_HTML.style.display = "none"
    game_loadingScreen.style.display = "inline-block"
    game_loadingScreen__loadingBox___loadingBar.style.animation = "loadingIntoGameBarFill 27s forwards"
    
}
lobbyScreen_menu__campaign.onmouseover = function() {
    lobbyScreen_menu__info.innerHTML = '<div style="color: white;"><div style="color: grey">Single Player</div>You can play as Napoleon conquering Europe, the Spanish conquering the Americas, the British settling colonial unrest in the 13 Colonies and India, or the Dutch building the greatest trading empire!<div style="color:turquoise;">Reputation Points +4 (for every campaign completed)</div></div>'
}
lobbyScreen_menu__findMatch.onmouseover = function() {
    lobbyScreen_menu__info.innerHTML = '<div style="color: white;"><div style="color: grey">Multiplayer</div>Play against fellow tacticians online as you rank up to be the best tactition the colonial world has ever known! The maps in these matches are not historical.<div style="color:turquoise;">Reputation Points +3 (for every match won)</div></div>'
}
lobbyScreen_menu__tournaments.onmouseover = function() {
    lobbyScreen_menu__info.innerHTML = '<div style="color: white;"><div style="color: grey">Multiplayer</div>Win a series of challenges in multiplayer matches. New tournaments created weekly.<div style="color:yellow;">First place</div><div style="color:turquoise;">Reputation Points +27</div><div style="color:yellow;">Second place</div><div style="color:turquoise;">Reputation Points +14</div><div style="color:yellow;">Third place</div><div style="color:turquoise;">Reputation Points +9</div></div>'
}
lobbyScreen_menu__alliances.onmouseover = function() {
    lobbyScreen_menu__info.innerHTML = '<div style="color: white;"><div style="color: grey">Multiplayer</div>Ally with other players to create a powerful and united force that no one can stop!</div>'
}

function enterMatch() {

}

