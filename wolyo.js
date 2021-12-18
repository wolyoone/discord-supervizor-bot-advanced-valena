const { Client, MessageEmbed , message } = require("discord.js");
const keep_alive = require('./keep_alive.js')
const Discord = require("discord.js")
require('discord-reply');
const client = (global.client = new Client());
const MessageButton = require('discord-buttons');
MessageButton(client);
const settings = require("./src/configs/settings.json");
const config = require("./src/configs/config.json")
const emoji = require("./src/configs/emoji.json")
const moment = require('moment');
require('moment-duration-format')
const fs = require("fs");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.invites = new Discord.Collection();
client.cooldown = new Map();

require("./src/Handlers/eventHandler");
require("./src/Handlers/mongoHandler");
require("./src/Handlers/commandHandler");
require("./src/Handlers/functionHandler")(client);


Date.prototype.toTurkishFormatDate = function (format) {
  let date = this,
    day = date.getDate(),
    weekDay = date.getDay(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  let monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
  let dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");

  if (!format) {
    format = "dd MM yyyy | hh:ii:ss";
  };
  format = format.replace("mm", month.toString().padStart(2, "0"));
  format = format.replace("MM", monthNames[month]);
  
  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substr(2, 2));
  };
  
  format = format.replace("dd", day.toString().padStart(2, "0"));
  format = format.replace("DD", dayNames[weekDay]);

  if (format.indexOf("HH") > -1) format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'));
  if (format.indexOf("hh") > -1) {
    if (hours > 24) hours -= 24;
    if (hours === 0) hours = 24;
    format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'));
  };
  if (format.indexOf("ii") > -1) format = format.replace("ii", minutes.toString().replace(/^(\d)$/, '0$1'));
  if (format.indexOf("ss") > -1) format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'));
  return format;
};

client.login(process.env.token)
.then(() => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [Wolyo-Moderation] Bot connected!`))
.catch(() => console.log("[BOT] Bot can't connected!"));
