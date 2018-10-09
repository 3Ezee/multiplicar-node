const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('======================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i }\n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido para la base ${ base } no es un número`);
            return;
        }


        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-b${ base }l${ limite }.txt`, data, (err) => {
            if (err)
                throw reject(err)
            else
                resolve(`tabla-${ base }l${ limite }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}