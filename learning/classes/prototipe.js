function Persona(nombre, apellido, altura) {
    this.nombre  = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

const edwin = new Persona('Edwin', 'García', 1.70)
const lorena = new Persona('Lorena', 'Muñoz', 1.50)

edwin.saludar()
lorena.saludar()
