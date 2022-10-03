import{criptografiasTeste} from './data/criptografias.js';

function handleSubmit(event) {
    event.preventDefault();
  
    const data = Object.fromEntries(new FormData(InserirPalavra));
}

function Criptografar(){

    const palavraNormal= `${PalavraParaCriptografar.value}`.split('')
    const Alfabeto='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const Ciclo= Number(CiclosNoAlfabeto.value)

    const Criptografia=Alfabeto.slice(-Ciclo,Alfabeto.length)+ Alfabeto.slice(0,Ciclo) + Alfabeto.slice(Ciclo, -Ciclo) //parte que foi 'empurrada' para fora + parte inicial que 'empurrou' as demais letras + parte que foi 'empurrada'

    let palavraNormalCriptografada =[]
    
    for (i of palavraNormal){
        palavraNormalCriptografada.push(Alfabeto[Criptografia.indexOf(i.toUpperCase())])
    }
    PalavraCriptografada.value = palavraNormalCriptografada.join('')

}

function insertCriptograpyRow(palavra) {
    const view = `<tr>
      <th scope="row">${palavra.original}</th>
      <td>${palavra.cycle}</td>
      <td>${palavra.cryptography}</td>
    </tr>`;
  
    table.insertAdjacentHTML('afterbegin', view);
  }

function loadTests(cryptography) {
    cryptography.map((Palavra) => insertCriptograpyRow(Palavra));
}
const table = document.querySelector('tbody');

loadTests(criptografiasTeste);