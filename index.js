const Discord = require("discord.js");
BrainFuck = require("./brainfuck").BrainFuck;
Character = require("./brainfuck").Character;
parseArgs = require("./parse-args");
settings = require("./settings.json");
bot = new Discord.Client();

bot.login(settings.token);

bot.on("message", function(message) {
	if (message.content.startsWith("```BrainFuck")) {
		let code = message.content.slice(12).split("```")[0];
		let args = parseArgs(message.content.slice(12).split("```")[1])
		let outputs = new BrainFuck(code).outputs;
		message.channel.sendMessage(outputs);
	}
});
