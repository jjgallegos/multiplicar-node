const fs = require('fs');
let listar = (base, limite) => {


    for (let index = 0; index < limite + 1; index++) {
        console.log(`${base} * ${index} = ${base*index}`);
    }


}
let CrearArchivo = ((a, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(a) || !Number(limite)) {
            reject('No es un numero');
            return;
        }

        let tabla = "";
        for (let index = 1; index < limite + 1; index++) {
            tabla = tabla + `${a} * ${index} = ${a * index}\n`;
        }

        fs.writeFile('tabla-2.txt', tabla, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve('el archivo a sido creado');
        });

    })
})
module.exports = {
    CrearArchivo,
    listar
}