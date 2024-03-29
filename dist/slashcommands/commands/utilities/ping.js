"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const discord_js_1 = require("discord.js");
const ping = {
    data: new discord_js_1.SlashCommandBuilder().setName('ping').setDescription('Sample slash command.'),
    async execute(interaction) {
        interaction.reply('Pong!');
    },
};
exports.ping = ping;
