const token = '5153803080:AAFSbmiWaDUQ2quR5AWRAsCEM9uvc_2WMRA'
const TelegramApi = require('node-telegram-bot-api');
const { start } = require('repl');
const bot = new TelegramApi(token, {polling: true});
bot.setMyCommands([
    {command: '/start', description: 'Початок роботи'},
    {command: '/main', description: 'головний екран'},
])

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/start') {
        await bot.sendMessage(chatId, 'Привет')
    }
    if (text === '/main') {
        await bot.sendMessage(chatId, 'головний екран', mainScreenOptions)
    }
    
}) 

const mainScreenOptions = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'знайомі з Росії/Білорусі', callback_data: 'yg'}],
                [{text: 'місцеположення противника', callback_data: 'pl'}],
                [{text: 'підтримати проєкт', callback_data: 'ok'}],
                [{text: 'Про бота', callback_data: 'pk'}],
        ]
    })
    
}

start()


// const start = () => {
//     bot.on('message', msg => {
//         const text = msg.text;
//         const chatId = msg.chat.id;
//         if (text === '/start') {
//             return bot.sendMessage(chatId, 'Привет')
//         }
//         if (text === '/mainScreen') {
//             return bot.sendMessage(chatId, 'головний екран', mainScreenOptions)
//         }
//     })
// }

// const mainScreenOptions = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{text: 'знайомі з Росії/Білорусі', callback_data: 'yg'}],
//             [{text: 'місцеположення противника', callback_data: 'pl'}],
//             [{text: 'підтримати проєкт', callback_data: 'ok'}],
//             [{text: 'Про бота', callback_data: 'pk'}],
//         ]
//     })
// }
