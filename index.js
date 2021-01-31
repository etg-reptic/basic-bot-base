const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'prefix goes here'
const fs = require('fs');

client.commands = new Discord.Collection();
     
    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for(const file of commandFiles){
        const command = require(`./commands/${file}`);
     
        client.commands.set(command.name, command);
    }






client.once('ready', () => {
    console.log('Clear bot is online!');
client.user.setActivity('prefix is -', { type: 'PLAYING'}).catch(console.error);
});





client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'test'){
       
        client.commands.get('test').execute(message, args);
    
    }else if(command === 'hi'){
    
        client.commands.get('hi').execute(message, args);
        
    }




});








client.login('bot token goes here')