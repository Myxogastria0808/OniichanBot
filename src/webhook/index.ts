import { Client, WebhookClient } from 'discord.js';
import dotenv from 'dotenv';
import cron from 'node-cron';
import { checkIsString } from '../types/env';
import { embedMessage } from './message';

dotenv.config();

const webhookUrl = checkIsString(process.env.WEBHOOKURL);

const client = new Client({
    intents: [],
});

client.once('ready', async () => {
    console.log('Bot starting ...');
    if (client.user) {
        console.log(`Logged in as ${client.user.tag}!`);

        try {
            const webhook = new WebhookClient({ url: webhookUrl });
            cron.schedule('* * * * * *', async () => {
                webhook.send({
                    embeds: [embedMessage],
                });
            });
        } catch (error) {
            console.error('WebHook Error: ', error);
        }
    }
});

client.login(process.env.TOKEN);
