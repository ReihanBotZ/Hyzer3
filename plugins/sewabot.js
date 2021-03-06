let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 2 Bulan
├ 1 Bulan
├ 1 Minggu
├ Trial 8 jam
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa (Telkomsel): 6285368159958 (+5.000)
gopay : 6285368159958
Dana: 6285368159958
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: ReihanBotZ,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '2 Bulan', description: "Rp15.000\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rp10.000\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: '1 Minggu', description: "Rp8.000\nSewa bot selama 1 minggu.", rowId:".masuk"},
        {title: 'Trial', description: "Rp2.000\nBot gratis 3 Hari.", rowId:".join"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan Berlaku.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//ReihanBotZ
