//objeto literal
const persona = {
    nombre:"Jose",
    edad: 25,
    alias: "pepe",
    saludar: function() {
        return "Hola soy " + this.nombre + " y tengo " + this.edad + " años";
    },
    saludo2: function(){
        console.log("hola que tul?");
    }
}
console.log(persona);
persona.apellido="Gonzalez"

//funcion constructora
const Persona = function(nombre, edad, alias) {
    this.nombre = nombre;
    this.edad = edad;
    this.alias = alias;
    this.saludar = function() {
        return "Hola soy " + this.nombre + " y tengo " + this.edad + " años";
    }
}
const persona1 = new Persona("Jose", 25, "pepe");
const persona2 = new Persona("Lalo", 30, "lalo");
console.log(persona1);
console.log(persona2);
console.log(persona1.saludar());

//clases
class Persona2 {
    constructor(nombre, edad, alias) {
        this.nombre = nombre;
        this.edad = edad;
        this.alias = alias;
    }
    saludar() {
        return "Hola soy " + this.nombre + " y tengo " + this.edad + " años";
    }
}
const persona3 = new Persona2("Jose", 25, "pepe");

//destructuring
const {nombre, edad, alias} = persona3; // destructuring de objeto
console.log(nombre); // Jose


//spread operator
const persona4 = {...persona3, apellido: "Gonzalez"}; // destructuring de objeto
console.log(persona4); // {nombre: "Jose", edad: 25, alias: "pepe", apellido: "Gonzalez"}

