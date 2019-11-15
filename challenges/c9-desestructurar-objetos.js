const edwin = {
    nombre: 'edwin',
    edad: 31
}

const imprimirNombreYEdad = ({ nombre, edad } = {}) => {
    console.log(`Hola me llamo ${nombre} y tengo ${edad}`)
}

imprimirNombreYEdad(edwin)