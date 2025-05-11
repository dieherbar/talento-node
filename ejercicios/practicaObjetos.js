class Autos {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const auto1 = new Autos("Toyota", "Corolla", 2020, "Rojo");
const auto2 = new Autos("Honda", "Civic", 2019, "Azul");
const auto3 = new Autos("Ford", "Focus", 2013, "Verde");
const auto4 = new Autos("Chevrolet", "Cruze", 2021, "Negro");
const auto5 = new Autos("Nissan", "Sentra", 2022, "Blanco");
const auto6 = new Autos("Hyundai", "Elantra", 2017, "Gris");
const auto7 = new Autos("Kia", "Forte", 2023, "Amarillo");
const auto8 = new Autos("Volkswagen", "Jetta", 2014, "Rojo");
const auto9 = new Autos("Subaru", "Impreza", 2024, "Violeta");
const auto10 = new Autos("Mazda", "3", 2015, "Rojo");

const arrayAutos = [];  
arrayAutos.push(auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9, auto10);
//console.log(arrayAutos[5]);
arrayAutos.forEach(auto => { 
    if (auto.year > 2018) {
        console.log(`Marca: ${auto.brand}, Modelo: ${auto.model}, Año: ${auto.year}, Color: ${auto.color}`);
    }
});

/*
    1. Crear una clase llamada Autos que tenga las propiedades: marca, modelo, año y color.
    2. Crear diez instancias de la clase Autos con diferentes valores para cada propiedad.
    3. Almacenar las instancias en un array llamado arrayAutos.
    4. Imprimir en la consola los autos cuyo año sea mayor a 2018.
*/

/*
Segunda parte:
1. Crea una función que recorra el array de automóviles.
2. Usa destructuring dentro de la función para obtener el color de cada automóvil.
3. La función debe aceptar un color como parámetro y devolver por consola cuántos automóviles tienen ese color.
*/

function contarAutosPorColor(array, color) {
    let contador = 0;
    array.forEach(({ color: autoColor }) => {
        if (autoColor === color) {
            contador++;
        }
    });
    console.log(`Cantidad de autos de color ${color}: ${contador}`);
}

contarAutosPorColor(arrayAutos, "Rojo");