const crearSaludo = finalDeFrase => {
    return nombre => {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('ché')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Edwin')
saludoMexicano('Edwin')
saludoColombiano('Edwin')