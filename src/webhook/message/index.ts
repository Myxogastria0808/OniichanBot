import { EmbedBuilder } from 'discord.js';
import dotenv from 'dotenv';
import { checkIsString } from '../../types/env';

dotenv.config();

const imgUrl = checkIsString(process.env.IMGURL);

const embedMessage: EmbedBuilder = new EmbedBuilder()
    .setColor('#2ad3d0')
    .setTitle('今日のラッキー娘')
    .setURL('http://yukiosada.work')
    .setDescription('艦これのキャラクターを毎日ランダムで投稿します。')
    .setImage(imgUrl)
    .setTimestamp();

export { embedMessage };
