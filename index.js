const {TelegramBot} = require("node-telegram-bot-api");

const token = "8928162710:AAGkd7HIoX1ZFvRBlO3tPRO4s4zbbXSWG8g";


const option = {
    polling: true
}
const earthqueakeebot = new TelegramBot(token, option);

const prefix = "/";

const gempa = new RegExp(`^${prefix}gempa$`);


earthqueakeebot.onText(/\/start/, (msg)=>{
    const chatId = msg.from.id;
    const firstName = msg.from.first_name;

    const welcomeMsg = `Hallo ${firstName}, Selamat Datang Di Bot Informasi Gempa Terkini`
    earthqueakeebot.sendMessage(chatId, welcomeMsg);
})

earthqueakeebot.onText(gempa, async(callback)=>{
    const BMKG_ENDPOINT = "https://data.bmkg.go.id/DataMKG/TEWS/";
    const apiCall = await fetch(BMKG_ENDPOINT + "autogempa.json");
    const {Infogempa: { gempa: {Tanggal, Jam, Magnitude, Kedalaman, Shakemap} }} = await apiCall.json();
    const BMKImage = BMKG_ENDPOINT + Shakemap;
    const hasil = `
        Tanggal: ${Tanggal} \nJam: ${Jam} \nMagnitude: ${Magnitude} \nKedalaman: ${Kedalaman}
    `

    earthqueakeebot.sendPhoto(callback.from.id, BMKImage, {
        caption: hasil,
    })
})

