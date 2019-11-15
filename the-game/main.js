const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

class Juego {
    constructor() {
        this.inicializar()
    }

    inicializar() {
        btnEmpezar.classList.add('hide')
    }
}

const empezarJuego = () => {
    const juego = new Juego()
}
