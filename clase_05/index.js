//npm init -> inicializa el proyecto creando un package.json
//npm init -y -> inicializa el proyecto creando un package.json con valores por defecto
//npm install express -> instala express y lo agrega a las dependencias del package.json
const fs = require("fs");
const os = require("os");
const {suma,resta,multi,divi} = require("./modulos/math.js");

console.log("Hola Mundo desde Node.js");
console.log(suma(2, 3));
console.log(resta(3, 3));
console.log(multi(3, 5));
console.log(divi(9, 2));
console.log("Sistema Operativo: ", os.platform());

