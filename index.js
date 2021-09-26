const KahootSpammer = require('kahoot-spammer')
const api = 
console.log("Made by zamfiy2.0")

var gamePin = prompt("Gamepin: (No Spaces) ")

var BotName = prompt("Bot Name: (default: HI) ")

if (BotName == "") {
  BotName = 'HI' 
}


var amount = prompt("Amount: (default is 100)")

if (amount == "") {
  amount = 500 
}


api.spam(gamePin, BotName, amount) 


console.log('Sent ' + amount + ' to ' + gamePin + ' with Name ' + BotName); 


