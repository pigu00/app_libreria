const fs = require('fs')


const { edit } = require("./edit.js")
const { read } = require("./read.js")
const { write } = require("./write.js");
const { generarId } = require("./generarId.js");

const add = (filePath, title, author, genre, year, cost, price) => {
    var obj = {
        "id" : generarId(),
        "title":title, 
        "author":author, 
        "genre":genre,
        "year":parseInt(year),
        "cost":parseFloat(parseFloat(cost).toFixed(2))        ,
        "price":parseFloat(parseFloat(price).toFixed(2)) 
    };

    var data = read(filePath)

    data.push(obj)
    console.log(`El libro ${title} fue agregado exitosamente`)
    return write(data, filePath)
}


module.exports = { add }
