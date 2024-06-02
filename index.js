const { registrar, leer } = require('./operaciones');

const args = process.argv.slice(2);
const operacion = args[0];

switch (operacion) {
    case 'registrar':
        const [nombre, edad, animal, color, enfermedad] = args.slice(1);
        registrar(nombre, edad, animal, color, enfermedad);
        break;
    case 'leer':
        leer();
        break;
    default:
        console.log('No se reconoce la operación. Utiliza "registrar" o "leer".');
        break;
}
