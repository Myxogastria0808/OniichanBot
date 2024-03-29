"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedMessage = void 0;
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const env_1 = require("../../types/env");
dotenv_1.default.config();
const imgUrl = (0, env_1.checkIsString)(process.env.IMGURL);
const embedMessage = new discord_js_1.EmbedBuilder()
    .setColor('#2ad3d0')
    .setTitle('今日のラッキー娘')
    .setURL('http://yukiosada.work')
    .setDescription('艦これのキャラクターを毎日ランダムで投稿します。')
    .setImage(imgUrl)
    .setTimestamp();
exports.embedMessage = embedMessage;
