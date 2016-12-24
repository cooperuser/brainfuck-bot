const Discord = require("discord.js");
settings = require("./settings.json");
bot = new Discord.Client();

bot.login(settings.token);

bot.on("message", function(message) {
	console.log(message.content);
});
