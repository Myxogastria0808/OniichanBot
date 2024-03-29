import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

const ping = {
    data: new SlashCommandBuilder()
        .setName('upload')
        .setDescription('艦これの画像をアップロードしてください。')
        .addAttachmentOption((option) =>
            option.setName('attachment').setDescription('画像のアップロード').setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        const attachmentValue = interaction.options.get('attachment')?.attachment?.proxyURL;
        console.log(attachmentValue);
        if (typeof attachmentValue !== 'string') return;
        await interaction.reply(`[画像](${attachmentValue})`);
    },
};

export { ping };
