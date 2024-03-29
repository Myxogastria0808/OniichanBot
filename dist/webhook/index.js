"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const node_cron_1 = __importDefault(require("node-cron"));
const env_1 = require("../types/env");
const message_1 = require("./message");
dotenv_1.default.config();
const webhookUrl = (0, env_1.checkIsString)(process.env.WEBHOOKURL);
const client = new discord_js_1.Client({
    intents: [],
});
client.once('ready', async () => {
    console.log('Bot starting ...');
    if (client.user) {
        console.log(`Logged in as ${client.user.tag}!`);
        try {
            const webhook = new discord_js_1.WebhookClient({ url: webhookUrl });
            node_cron_1.default.schedule('* * * * * *', async () => {
                webhook.send({
                    embeds: [message_1.embedMessage],
                });
            });
        }
        catch (error) {
            console.error('WebHook Error: ', error);
        }
    }
});
client.login(process.env.TOKEN);
