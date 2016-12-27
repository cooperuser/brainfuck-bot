# brainfuck-bot
Discord bot that interprets BrainFuck code.

## Setup
#### Bot creation
First if you want to run this bot yourself, you will have to create a bot from the Discord website located [here](https://discordapp.com/developers/applications/me).
#### Repository installation
After creating a bot, you might want to clone this repository to actually run the code. You can do this by running
```
git clone https://github.com/cooper-anderson/brainfuck-bot.git
```
At the desired directory with your terminal application of choice.
#### Setting up the bot
Now that you have the bot and the repository, you can now link the two by entering the bot's unique token into the specified space in the `settings.json` file.
```JSON
{
  "token": "ENTER_TOKEN_HERE"
}
```
Also feel free to change any of those global settings to what you like.
#### Adding the bot to your server
Now that we have the bot and the code linked, you now have to add the bot to your servers of choice. You do this by going to the url [https://discordapp.com/api/oauth2/authorize?client_id=ENTER_TOKEN_HERE&scope=bot&permissions=0](), where you replace `ENTER_TOKEN_HERE` with your bots token.
#### Running the bot
Everything has been set up! Now to run the bot, navigate to the repository's directory with your favorite terminal application, and run the following command
```
npm start
```
Now go look at your server on discord, and the bot should have connected. But you should probably know how to use the bot though.

## Usage
After everything is set up, the bot is ready to use! To use this bot, you have to send a text message with the following syntax
```
```BRAINFUCK
  //BRAINFUCK_CODE
```ARGUMENTS
```
(Make sure that the \`\`\`BRAINFUCK is capitalized, because it is case sensitive)

If you have gotten this far, I assume that you are probably familiar with the BrainFuck language. If this is not the case, feel free to visit the BrainFuck Wiki located [here](https://en.wikipedia.org/wiki/Brainfuck).
The part that might need a little bit of an explanation would be the arguments. These work similarly to arguments in the command-line, where you specify the argument with `--` followed by the key and `=` followed by the value.
For example, if you would like any user to be able to respond to any input, not just by a prompt that they caused, you would run the code with `--anyUserInput=true`.
So in total, it would be
```
```BrainFuck
  ++++[,.-]
```--anyUserInput=true
```
Remember, you can stack as many different arguments together as there are programmed into this bot. So you can do something like `--anyUserInput=true --useNumberIO=false` for example.
