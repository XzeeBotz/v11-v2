let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  https://saweria.co/MrclNotWibu 
│ •  [0813-8168-5954]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
