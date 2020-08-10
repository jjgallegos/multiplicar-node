const { CrearArchivo, listar } = require('./multiplicar/multiplicar');
const argv2 = require('./config/config').argv;
//let corte = parametro.split('=')[1];
//console.log(argv.base);
let comando = argv2._[0];
switch (comando) {
    case 'listar':
        listar(argv2.base, argv2.limite);
        break;
    case 'crear':

        CrearArchivo(argv2.base, argv2.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('no existe el comando');
        break;
}
/*listar(argv.base, argv.limite).then((result) => {
    console.log(result);
}).catch(err => {
    console.log(err);
})*/