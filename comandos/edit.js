const { write } = require("./write.js");
const { read } = require("./read.js");

function edit(filePath, id, keyAReemplazar, reemplazo) {
  let libros = read(filePath);

  const newLibros = libros.map((libro) => {
    let cambiar = libro;
    if (libro.id === id) {
      if (keyAReemplazar === "year") {
        
        cambiar[keyAReemplazar] = Number(reemplazo);
        
        console.log(`El ${keyAReemplazar} del libro fue actualizado a ${reemplazo}`)

      } else if (keyAReemplazar === "cost" || keyAReemplazar === "price") {
        
        cambiar[keyAReemplazar] = parseFloat(parseFloat(reemplazo).toFixed(2));
        
        console.log(`El ${keyAReemplazar} del libro fue actualizado a ${reemplazo}`)

      } else {

        cambiar[keyAReemplazar] = reemplazo;
        
        console.log(`El ${keyAReemplazar} del libro fue actualizado a ${reemplazo}`)
      } 
        

    }
    return cambiar;
  });
  return write(libros, filePath);
}

module.exports = { edit };
