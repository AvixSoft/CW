
var mongojs = require('mongojs')
var db = mongojs('localhost:27017/CWdatabase', ['account','progress'])
db.account.insert({username:"The Creator", password:"xx8675309xx", repPoints: 0})

Database = {}
hed = {}
Database.passwordValidCheck = function(data, cb) {
    db.account.find({username:data.username, password:data.password}, function(err, res) {
        if(res.length > 0) {
            cb(true)
        } else {
            cb(false)
        }
    })
}

Database.usernameAvailabilityCheck = function(data, cb) {
    db.account.find({username:data.username}, function(err, res) {
        if(res.length > 0) {
            cb(true)
        } else {
            cb(false)
        }
    })
}

Database.addUser = function(data, cb) {
    db.account.insert({username:data.username, password:data.password}, function(err) {
        Database.savePlayerStats({username:data.username}, function(){
            cb()
        })
    })
}
Database.loadPlayerStats = function(username, cb) {
    db.progress.findOne({username:username}, function(err, res) {
        cb({repPoints:res.repPoints})
    })
}
Database.savePlayerStats = function(data, cb) {
    db.progress.update({username:data.username, repPoints:data.repPoints}, data, {upsert:true}, cb)
}
