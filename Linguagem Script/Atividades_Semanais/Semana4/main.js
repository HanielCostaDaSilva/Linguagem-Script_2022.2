let a = 5;
switch (a / 3) {
    case 0:
        console.log(a)
        break
    default:
        pass
}
function upperCase(string) {

    stringCuringa = string.split('')
    for (i in stringCuringa) {
        stringCuringa[i] = stringCuringa[i].toUpperCase()
    }
    return stringCuringa.join('')

}
function lowerCase(string) {

    stringCuringa = string.split('')
    for (i in stringCuringa) {
        stringCuringa[i] = stringCuringa[i].toLowerCase()
    }
    return stringCuringa.join('')

}

function camelCase(string) {
    stringCuringa = string.split('')
    for (i in stringCuringa) {
        if (i == 0) {
            stringCuringa[0] = stringCuringa[0].toUpperCase()
        }
        else if (stringCuringa[i - 1] == ' ') {
            stringCuringa[i] = stringCuringa[i].toUpperCase()
        }

    }

    return stringCuringa.join('')
}

function snakeCase(string) {
    stringCuringa = string.split('')
    let contadorEspacos = stringCuringa.reduce((total, valor) => {
        if (valor == ' ') {
            return total += 1
        }
        return total;
    }, 0)
    let contador = 0
    while (contador < contadorEspacos) {
        string = string.replace(' ', '_')
        contador += 1
    }
    return string
}
function reverse(string) {
    stringCuringa = string.split('')
    stringCuringa = stringCuringa.reverse()
    return stringCuringa.join(" ")
}
function countChar(string) {
    return string.length
}
function countWord(string) {
    stringCuringa = string.split(' ') + string.split('\n')
    console.log(stringCuringa)
    stringCuringa = stringCuringa.split(',')
    return stringCuringa.length
}

console.log(upperCase('olá meu amigo'))
console.log(lowerCase('olÁ MEu aMIgo'))
console.log(camelCase('olá meu amigo'))
console.log(snakeCase('   olá meu amigo    '))
console.log(reverse('   olá meu amigo    '))
console.log(countChar('olá meu amigo'))
console.log(countWord('olá     \n meu       consagrado  e   imensurável       \namigo'))
