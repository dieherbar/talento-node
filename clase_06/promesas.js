function taskAsinc(){
    return new Promise(function (resolve, reject)  {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Tarea Asincrona copletada");
            }else{
            reject(new Error ("Error en la tarea asincrona"));
            }
        }, 2000);
    });
}
const resultFulfilled = taskAsinc().then((response) =>{
    console.log(response);
});

const resultRejected = taskAsinc().catch((error) => {
    console.log(error);
})