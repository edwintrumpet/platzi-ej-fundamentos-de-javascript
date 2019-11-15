function factorial (numero) {
    if(!this.cache) {
        this.cache = {}
    }
    if(this.cache[numero]) {
        return this.cache[numero]
    }
    if(numero === 1) {
        return 1
    }
    this.cache[numero] = numero * factorial(numero - 1)
    console.log(this.cache)
    return this.cache[numero]
}

console.log(factorial(4))
console.log('Ahora el de 6')
console.log(factorial(6))
console.log('Denuevo el de 6')
console.log(factorial(6))