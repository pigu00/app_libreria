const fs = require('fs')
const {read} = require ("./read.js")
const { write } = require('./write.js');

const deletear = (filePath, id) => {
    
    var libros = read(filePath)
    
    var newLibros = libros.filter(libro => libro.id != id)
    
       return write(newLibros,filePath)
}


module.exports = {deletear}