let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*────────「 DONATE 」 ────────*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap update terus dengan:
┌〔 Donasi • Seiklasnya 〕
├ PULSA : 085368159958
├ GOPAY : 085368159958
├ DANA : 085368159958
└────
`.trim(), 'Donasi bang Biar Bot Nya on 24Jam', 'SEWA', '.sewa')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
