//console.log("Hola Mundo desde start -> script.js");
const args = process.argv.slice(2); // Ignoramos los dos primeros elementos con slice 

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