const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if(message.content.charAt(0) == '!') {
		if(message.content.substr(1, message.content.indexOf(" ") - 1) == "lastLog"){
			console.log(String(message.mentions));
			console.log(String(message.mentions.users));
			console.log(String(message.mentions.users.first()));
			console.log(String(message.mentions.users.first([Number(0)]).lastMessage));
			console.log(String(message.mentions.users.first([Number(0)]).lastMessage.createdAt));
			message.reply("Got message, time is: ");
			message.reply(String(message.mentions.users.first([Number(0)]).lastMessage.createdAt));
		}
	}
});

client.login(process.env.BOT_TOKEN);
