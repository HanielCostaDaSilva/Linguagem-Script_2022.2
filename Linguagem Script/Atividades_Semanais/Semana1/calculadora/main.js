function Calcular(operador1, operador2, sinal) {
    switch (sinal) {
        case '+':
            return operador1 + operador2;
        case '-':
            return operador1 - operador2;
        case '*':
            return operador1 * operador2;
        case '/':
            return operador1 / operador2;
        default:
            return undefined;
    }
}

console.log(Calcular(5, Number('5'), '+'))
console.log(Calcular(5, 5, '-'))
console.log(Calcular(5, 5, '*'))
console.log(Calcular(5, 5, '/'))
console.log(Calcular(5, 5, 'O'))
