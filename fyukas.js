const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("ready", () => {
  console.log(
    `${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`
  );
});
client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id);

        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1);
          await sleep(2000);
          await msg.channel.send("https://discord.gg/qmjHEYdcbG"); // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.
          await sleep(2000);
        }
      }
    }
  }
});

client.login("ODIzODQxNzI4NDUxNTc1ODM5.YFms5g.tm0HmtZcunkDtSaH2VdjlY2Mj3w"); // user tokeniniz

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "j4j dm") {
    msg.channel.send("join for joiin??");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "j4j") {
    msg.reply("j4j dm me?");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "j2j") {
    msg.channel.send("j2j dm me?");
  }
});
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "j2j dm") {
    msg.reply("j2j pls dm???");
  }
});
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("as");
  }
});
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "dn") {
    msg.reply("geldim");
  }
});
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "J4J DM FAST!!") {
    msg.reply("join for join dm???");
  }
});
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "jfj") {
    msg.reply("jfj??");
  }
});