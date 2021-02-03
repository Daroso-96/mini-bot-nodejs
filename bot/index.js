const telebot = require('telebot');
const CONTANTS = require('/contants')
const bot = new Telebot({
token: CONTANTS.TELEBOT.TOKEN
});
bot.on(["/start", "/hola"], (msg) => {
    bot.sendMessage(msg.chat.id , `¡Hola ${msg.chat.username} bienvenido al bot de sahita!`)
});
bot.start();