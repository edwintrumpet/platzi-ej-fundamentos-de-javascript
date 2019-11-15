ADULT = 18

const edwin = {
    nombre: 'edwin',
    apellido: 'garcía',
    edad: 31
}

const imprimirSiEsMayorDeEdad = ({ nombre, edad } = {}) => {
    if(edad >= ADULT){
        console.log(`${nombre} es mayor de edad`)
    }else{
        console.log(`${nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(edwin)