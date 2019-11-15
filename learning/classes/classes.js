class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre  = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    despedida() {
        console.log(`bye`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saluda() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

const edwin = new Desarrollador('Edwin', 'García', 1.70)
const lorena = new Persona('Lorena', 'Muñoz', 1.50)

edwin.saludar()
lorena.saludar()
edwin.despedida()
lorena.despedida()