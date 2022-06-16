

const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6285215319934']
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

global.thumb = { url : 'https://telegra.ph/file/f4f4ef5fdb64d2ca75af2.jpg' }
global.visoka = { url: 'https://telegra.ph/file/f4f4ef5fdb64d2ca75af2.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
