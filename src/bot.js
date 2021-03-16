require('dotenv').config();

const { Client, MessageAttachment  } = require('discord.js');
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
                            var pekofyMsg;
                            if (!repliedMsg.content.match(/\.\s/g)){
                                pekofyMsg = (repliedMsg.content
                                    .split(/\s+/)
                                    .join(" ") + " ")
                                    .replace(/\.\s/g, " **peko.** ");
                            } else {
                                pekofyMsg = repliedMsg.content.replace(/\.\s/g, " **peko.** ");
                            } 
                            
                            if(pekofyMsg.toLowerCase().endsWith(" **peko.** ")) {
                                message.channel.send(`${pekofyMsg}`)
                            } else {
                                message.channel.send(`${pekofyMsg} **peko.** `)
                            }
                        })
                        .catch(()=>{
                            message.channel.send("Pain peko, there is something wrong with the message peko")
                        });
                } else {
                    var pekofyArgs;
                    if(args.length == 1){
                        pekofyArgs = (args.join(" ") + " ").replace(/\.\s/g, " **peko.** ");
                    } else {
                        pekofyArgs = args.join(" ").replace(/\.\s/g, " **peko.** ");
                    }
                    if(pekofyArgs.toLowerCase().endsWith(" **peko.** ")) {
                        message.channel.send(`${pekofyArgs}`)
                    } else {
                        message.channel.send(`${pekofyArgs} **peko.** `)
                    }
                    
                }
                break;
            case "pain":
                const attachment = new MessageAttachment("https://imgur.com/Pq89pHr.jpg");
                message.channel.send("**Pain Peko**", attachment);
                break;
            default:
                message.channel.send("Pain peko, unknown command peko");
                break;
        }
    }
})

client.login(process.env.DISCORDBOT_TOKEN)
