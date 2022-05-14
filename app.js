const { edit } = require("./comandos/edit.js");
const { add } = require("./comandos/add.js");
const { deletear } = require("./comandos/delete.js");
const { readTitulos } = require("./comandos/readTitulos.js");
const { help } = require("./comandos/help.js");

const filePath = "./libros.json";

const entrada = process.argv;

const comando = entrada[2];
const param1 = entrada[3];
const param2 = entrada[4];
const param3 = entrada[5];
const param4 = entrada[6];
const param5 = entrada[7];
const param6 = entrada[8];


switch (comando) {
  case "read":
    console.log(readTitulos(filePath));
    break;
  case "edit":
    console.log(edit(filePath, param1, param2, param3));
    break;
  case "new":
  console.log(add(filePath, param1, param2, param3, param4, param5, param6));
  break;
  case "delete":
    console.log(deletear(filePath, param1));
    break;
  case "--help":
      console.log(help());
  break;
  default:
    console.log("Ingrese una opción valida: read, new, edit o delete. \nIngrese <<node app.js --help>> para recibir instrucciones de ingreso de parametros");
}