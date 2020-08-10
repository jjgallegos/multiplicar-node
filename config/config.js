const argv = require('yargs').command('listar', 'imprime en consala la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}).argv;

module.exports = {
    argv
}