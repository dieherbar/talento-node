const suma = function (a, b){
    return a + b;
}
console.log(suma(4, 13)); // 7

const resta = (c, d) => {
    return c - d;
}

console.log(resta(7, 12)); // 5

function multiplica(e, f) {
    if (!isNaN(e) && !isNaN(f)) {
        return e * f;        
    } else {
        return "Error: uno de los argumentos no es un número";
        
    }
}
let resultado = (multiplica("true", 15)); // 15
console.log("el resultado: "+ resultado);

const saludoParam = (nombre) => {
    return "Hola " + nombre;
}
console.log(saludoParam("Lalo")); // Hola Javier


//HOF -> Higher Order Function o callback
// una funcion que recibe otra funcion como argumento
function saludarNombre(nombre, cb){
    return cb(nombre);
}
console.log(saludarNombre("pepe", saludoParam))

//arrays
const numeros = [10, 2, 673, 4, "e", 36, 57, 8, 9, 10];
let tercero = numeros[2]; //673
console.log(tercero); // 673
console.log(numeros.slice(1,5))
numeros.push(100); // agrega el 100 al final del array
numeros.unshift(200); // agrega el 200 al inicio del array
/*console.log(numeros); // [200, 10, 2, 673, 4, "e", 36, 57, 8, 9, 10, 100]
numeros.splice(0, 3); // elimina 3 elementos a partir del indice 2*/
console.log(numeros); // [200, 10, "e", 36, 57, 8, 9, 10, 100]*/

const encontrar = numeros.find((element) => {return element > 100}); // encuentra el primer elemento mayor a 100
console.log(encontrar); // 200, el primer elemento mayor a 100
console.log(encontrar); // 200, el primer elemento mayor a 100

numeros.forEach(numeros => {console.log(numeros)}); // imprime cada elemento del array



//ejercicio mostrar precios con iva incluido
const precios = [100, 200, 30, 450, 500, 600, 73, 8, 90, 1000]; // array de precios
const IVA = 1.21;
const conIva = precios.map((precios) => precios *= IVA); // multiplica cada elemento del array por 1.21
conIva.forEach(conIva => {console.log("El precio con IVA es: " + conIva)}); 
conIva.forEach((conIva) => {console.log(`El precio es de pesos: ${conIva} - IVA incluido`)});

