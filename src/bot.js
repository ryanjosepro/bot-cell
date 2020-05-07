/*
BOTNET - 1.0

/ping = Retorna o tempo de resposta do servidor;

-Arquivos opus são transformados em mp3;

*/

const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');

const fetch = require('node-fetch');

const utils = require('./utils/utils');

//Bot Events

client.on('ready', () => {
    console.log('Bot Pronto!');
    console.log(['asdf', 123, 'fuck'])
    client.user.setActivity('');
})

client.on('message', async msg => {

    const responder = resposta => {
        msg.reply(resposta);
    }

    //Não responder a própria mensagem
    if (!msg.author.bot) {
        console.log(`${msg.author.username} disse "${msg.content}"`);

        let command = utils.commandToObj(msg.content);

        switch (command.command) {
            //Ping
            case '/ping':
                responder(`Pong! ${msg.client.ws.ping} ms`);
            break;
        }

        //Transformar arquivos opus em mp3
        msg.attachments.map((value) => {
            let url = value.url;
            let name = value.filename.split('.');

            if (name[name.length - 1] == 'opus') {
                name[name.length - 1] = 'mp3';

                const attach = new discord.Attachment(url, name.join('.'));
                
                msg.reply(attach);
            }
        });
    }
})

console.log(['Teste1', 'Teste2', 'Teste3', 'Teste4']);

//client.login(config.token);