"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const discord_js_1 = require("discord.js");
const ping = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('upload')
        .setDescription('艦これの画像をアップロードしてください。')
        .addAttachmentOption((option) => option.setName('attachment').setDescription('画像のアップロード').setRequired(true)),
    async execute(interaction) {
        const attachmentValue = interaction.options.get('attachment')?.attachment?.proxyURL;
        console.log(attachmentValue);
        if (typeof attachmentValue !== 'string')
            return;
        await interaction.reply(`[画像](${attachmentValue})`);
    },
};
exports.ping = ping;
