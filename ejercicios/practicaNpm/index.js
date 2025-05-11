/*const fs = require("fs");
const os = require("os");
console.log("Hola Mundo desde Node.js");
/*console.log("Sistema Operativo: ", os.arch());
console.log("Sistema Operativo: ", os.platform());
console.log("Sistema Operativo: ", os.cpus());*/
const argu = process.argv.slice(2);

//importar con commonjs
/*const math = require("./modules/math.js");
//otra forma de importar
const {add , sub} = require("./modules/math.js");

console.log(math.add(2, 3));
console.log(sub(30, 3));*/

//importar con ESModule
import { mul, div } from "./modules/mathEsm.js";
console.log(mul(2, 3));
console.log(div(30, 3));

//console.log(argu);
console.log(argu[1]);

const args = process.argv.slice(2); // Ignoramos los dos primeros elementos con slice 
/*if (args[0] === 'saludar') { 
    console.log(`¡Hola, ${args[1] || 'mundo'}!`); 
} else if (args[0] === 'despedir') { 
    console.log(`¡Adiós, ${args[1] || 'mundo'}!`); 
} else { 
    console.log('Comando no reconocido. Usa "saludar" o "despedir".');
}*/

switch (args[0]) {
    case 'GET':
        if (args[1] != undefined) {
            console.log(`Toma un dato`);
        } else {
            console.log("No se ha pasado un dato");
        }
        break;
    case 'POST':
        if (args[1] === undefined) {
            console.log(`No se ha pasado el id`);
        } else {
            console.log(`Recibimos ${args[1]}  satisfactoriamente`);
        }
        break;
    case 'PUT':
        if (args[1] != undefined) {
            console.log(`Modificamos el item con id: ${args[1]}  satisfactoriamente`);
        } else {
            console.log(`No se ha podido modificar el item, no se ha pasado el id`);
        }
        break;
    case 'DELETE':
        if (args[1] !== undefined) {
            console.log(`El item con id: ${args[1]}  se eliminó con éxito`);
        } else {
            console.log(`No se ha podido eliminar el item, no se ha pasado el id`);
        }
        break;
    default:
        console.log('Comando no reconocido.');
}