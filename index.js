const Discord = require("discord.js");
parseArgs = require("./parse-args");
settings = require("./settings.json");
bot = new Discord.Client();

bot.login(settings.token);

bot.on("message", function(message) {
	if (message.content.startsWith("```BrainFuck")) {
		let code = message.content.slice(12).split("```")[0];
		let args = parseArgs(message.content.slice(12).split("```")[1])
		console.log(code, args);
	}
});
