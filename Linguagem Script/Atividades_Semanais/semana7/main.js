

function Calcular(operador1,sinal, operador2) {
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
resultado=document.getElementById('Resultado');
operacao=document.getElementById('Operacao');

operador1=Number(prompt('Digte o primeiro operador: '));
sinal=prompt('Digte agora a operação desejada: ');
operador2=Number(prompt('Digte o segundo operador: '));

operacao.innerText = `${operador1} ${sinal} ${operador2} =`
resultado.innerText = Calcular(operador1, sinal, operador2)