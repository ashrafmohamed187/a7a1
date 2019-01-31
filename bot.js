const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("540248111944040458")
setInterval(function() {
channel.send(`ana krm el kmt maly4 7dod b7b el gwafa f45ooooooooooola 7ta ana spamer ebn wes5a (asdy el bot m4 ana) ana bot kmt nar b7b el mngnez kol youm kmt naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar`);
}, 30)
})

client.login(process.env.BOT_TOKEN);