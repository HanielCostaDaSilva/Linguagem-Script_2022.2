const nomeCompleto ='luis carlos felipe de sousa castanhaireira da costa fernando silva'
const p= Document.querySelector('p')
function Criar_Citacao_Nome(nome){
    let nomeCuringa=nome.split(" ")
    for (i in nomeCuringa){
        nomeCuringa[i]= nomeCuringa[i][0].toUpperCase() + `${nomeCuringa[i].slice(1,nomeCuringa[i].length)}`.toLowerCase()
    }
    ultimoNome=nomeCuringa.pop()
    return `${ultimoNome.toUpperCase()}; ${ nomeCuringa.join(' ')}`
}

function Criar_Citacao_Nome_Simplificada(nome){
    let nomeCuringa=nome.split(" ")
    ultimoNome=`${nomeCuringa.pop()}`.toUpperCase()
    for (i in nomeCuringa){
        nomeCuringa[i]= nomeCuringa[i][0].toUpperCase() + "."
    }
    //while( nomeCuringa.length>3){
    //    nomeCuringa.pop()
    //}
    return `${ultimoNome}; ${ nomeCuringa.join(' ')}`
}

console.log(Criar_Citacao_Nome(nomeCompleto))
console.log(Criar_Citacao_Nome_Simplificada(nomeCompleto))
