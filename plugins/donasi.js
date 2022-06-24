let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Saweria」
│ •  https://saweria.co/MrclNotWibu 
│ •  [0813-8168-5954] telkom
│ •  [0857-9723-4413] indosat
│ •  [0813-8168-5954] Gopay,dana,ovo
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
