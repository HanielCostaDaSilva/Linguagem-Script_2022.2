function sum(...valores) {
    const soma = valores.reduce((Anterior, Seguinte) => Anterior + Seguinte)
    return soma
}

console.log(sum(1, 2, 3, 4))

function sumOdds(...valores) {
    let Somatorio = 0
    const soma = valores.forEach((Numero) => {
        if (Numero & 1) {
            Somatorio += Numero
        }

    })
    return Somatorio
}

console.log(sumOdds(1, 2, 3, 4))

function product(...mutiplicadores) {
    const produto = mutiplicadores.reduce((Anterior, Seguinte) => Anterior * Seguinte)
    return produto
}

console.log(product(1, 2, 3, 4, 5))