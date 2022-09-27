const salaJS = [7, 7, 8, 8, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 8, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`A média da sala de JS é:${notasDaSala(salaJS)}`)