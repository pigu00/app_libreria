
const fs = require('fs')
const { read } = require("./read.js");

function readTitulos(filePath) {
  let libros = read(filePath);

  const soloTitulos = libros.map((libro) => {
    console.log(libro.id, "=>", libro.title, );
  });
}


module.exports = { readTitulos };
