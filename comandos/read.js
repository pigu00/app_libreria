const fs = require('fs')


const read = filePath => JSON.parse(fs.readFileSync(filePath, "utf-8"))
 


module.exports = {read}