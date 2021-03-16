require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();

const COMMAND_PREFIX = "!"

client.on('ready' , () =>{
  console.log("bot active!")
  client.user.setActivity("AH↓HA↑HA↑/PE↗KO↘", {
        type: "LISTENING",
        url: "https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ"
    });
})

client.on('message', (message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith(COMMAND_PREFIX)){
        const [command, ...args] = message.content
        .substring(COMMAND_PREFIX.length)
        .split(/\s+/)
        switch (command) {
            case "pekofy":
                if(message.reference !== null){
                    message.channel.messages.fetch(message.reference.messageID)
                        .then((repliedMsg)=> {
                            if(repliedMsg.content.toLowerCase().endsWith("peko")){
                                message.channel.send(`alredy pekofied peko`)
                            } else {    
                                message.channel.send(`${repliedMsg.content} peko`)
                            }
                        })
                        .catch(()=>{
                            message.channel.send("Pain peko, there is something wrong with the message peko")
                        });
                } else {
                    const pekofyArgs = args.join(" ");
                    if(pekofyArgs.toLowerCase().endsWith("peko")){
                        message.channel.send(`alredy pekofied peko`)
                    } else {
                        message.channel.send(`${pekofyArgs} peko`)
                    }
                    
                }
                break;
        
            default:
                message.channel.send("Pain peko, unknown command peko");
                break;
        }
    }
})

client.login(process.env.DISCORDBOT_TOKEN)
