function CriptografarPalavras(palavra='',ordem){
    let palavraCriptografada=`${palavra.toUpperCase()}`.split('')
    const Alfabeto='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const Criptografia=Alfabeto.slice(-ordem,Alfabeto.length)+ Alfabeto.slice(0,ordem) + Alfabeto.slice(ordem, -ordem) //parte que foi 'empurrada' para fora + parte inicial que 'empurrou' as demais letras + parte que foi 'empurrada'
    console.log(Criptografia) 
    for (i in palavraCriptografada){
        palavraCriptografada[i]= Alfabeto[Criptografia.indexOf(palavraCriptografada[i])]
        console.log(palavraCriptografada)
    }
    return palavraCriptografada.join('')

}

console.log(CriptografarPalavras("abc",2))
console.log(CriptografarPalavras("xyz",2))
console.log(CriptografarPalavras("xyz",13))