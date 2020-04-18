const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("هلا بالعيال", "https://www.twitch.tv/Alpha");
});
 
 
 
 
 


  
client.on("message", msg => {
let prefix = '-'
if(msg.content.startsWith(prefix + "help")){
msg.channel.send("**تم الأرسال في الخاص**")
msg.author.send(`
-user
-ban
-kick
-mute / -unmute 
-id
-top inv 
-roles
رابط
-server
-colors / الوان
-color / لون
-bc
-mc / -unmc
-say
-clear / مسح
-ping
-avatar
`)
}
});


client.login(process.env.BOT_TOKEN);
