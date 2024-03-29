"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const env_1 = require("../types/env");
const utilities_1 = require("./commands/utilities");
dotenv_1.default.config();
const commands = [utilities_1.ping.data.toJSON()];
const token = (0, env_1.checkIsString)(process.env.TOKEN);
const applicationId = (0, env_1.checkIsString)(process.env.APPLICATIONID);
const guildId = (0, env_1.checkIsString)(process.env.GUILDID);
const rest = new discord_js_1.REST({ version: '10' }).setToken(token);
//Discordサーバーにコマンドを登録
const register = (async () => {
    try {
        const registeredCommands = await rest.put(discord_js_1.Routes.applicationGuildCommands(applicationId, guildId), {
            body: commands,
        });
        console.log(registeredCommands);
    }
    catch (error) {
        console.error(error);
    }
})();
