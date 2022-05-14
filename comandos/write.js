const fs = require('fs')

function write(cadena, ruta) {
    let datoParseado = JSON.stringify(cadena, null, 2)
    return fs.writeFileSync(`${ruta}`, datoParseado)
}

module.exports = {write}