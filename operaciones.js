const fs = require('fs');

function leerArchivo(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        return [];
    }
}

function escribirArchivo(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log('Archivo guardado con éxito');
    } catch (error) {
        console.error('Error al escribir el archivo:', error);
    }
}

function registrar(nombre, edad, animal, color, enfermedad) {
    const filePath = 'citas.json';
    const citas = leerArchivo(filePath);

    // Validar entradas
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.error('Todos los campos son obligatorios');
        return;
    }

    // Crear nueva cita
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    // Agregar la nueva cita al arreglo de citas
    citas.push(nuevaCita);

    // Guardar el arreglo actualizado en citas.json
    escribirArchivo(filePath, citas);
}

function leer() {
    const filePath = 'citas.json';
    const citas = leerArchivo(filePath);
    console.log(citas);
}

module.exports = { registrar, leer };
