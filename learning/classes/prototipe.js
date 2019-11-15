function heredaDe(prototipoHijo, prototipoPadre) {
    let fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre  = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.despedida = function() {
    console.log(`bye`)
}

function Desarrollador(nombre, apellido) {
    this.nombre  = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

const edwin = new Desarrollador('Edwin', 'García', 1.70)
const lorena = new Persona('Lorena', 'Muñoz', 1.50)

edwin.saludar()
lorena.saludar()
edwin.despedida()
lorena.despedida()