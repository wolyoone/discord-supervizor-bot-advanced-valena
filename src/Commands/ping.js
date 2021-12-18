const Discord = require("discord.js");
const conf = require("../../configs/config.json");
const settings = require("../../configs/settings.json");

module.exports = {
  conf: {
    aliases: ["ms"],
    name: "ping",
    owner: true,
  },

  run: async (client, message, args) => {
    if(message.author.id !== "810161653756198933") return;
    message.channel.send(`Pingim \`${client.ws.ping}\``)
}}
