//Script

//Exception CEP
class CEPEXCEPTION {
    constructor(message) {
        this.message = message;
        this.name = "CEPEXCEPTION";
    }
}
//Lida com o evento de submit do formulário
function handleEvent(event){
    event.preventDefault();
}

//Função que deverá inserir todos os valores recebidos ao chamar o arquivo Json do CEP
function inserirValores(ArquivoJson){
    try{
        if(!("erro" in ArquivoJson)){    
            ESTADO.value= ArquivoJson.uf
            CIDADE.value=ArquivoJson.localidade
            RUA.value=ArquivoJson.logradouro
            BAIRRO.value=ArquivoJson.bairro
        }

        else{ //O usuario não digitou o valor certo
            throw  new CEPEXCEPTION('CEP NÃO ENCONTRADO')
        }
    }
    catch (e) {
        if(e instanceof CEPEXCEPTION) 
        limparFormulario()
        alert(e.message)
        console.error(`CEP inserido: ${CEP.value}: ${e.message}`)

    }
}
//Checa se o CEP inserido pelo usuário é válido

function ConferirValoresCEP(){

    var validacep = /^[0-9]{8}$/; //o CEP deve ter apenas 8 digitos numéricos, ex: 12345678

    if(validacep.test(CEP.value)){ 
        var script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/'+ CEP.value + '/json/?callback=inserirValores';
        document.body.appendChild(script);
    }

}

function limparFormulario(){
    CEP.value=''
    ESTADO.value=''
    CIDADE.value=''
    RUA.value=''
    NUMERO.value=''
    BAIRRO.value=''

}

function ChecarCEP(){

    try{
        if(CEP.value.length == 8 ){
            ConferirValoresCEP()
        }
        else{
            throw new CEPEXCEPTION('O TAMANHO INSERIDO DO CEP È INVÀLIDO')
        }
    }
    //O usuário Escreveu o CEP errado.
     catch(e){
        if(e instanceof CEPEXCEPTION) 
        //alert(e.message)
        console.error(`CEP inserido: ${CEP.value}: ${e.message}`)
        //limparFormulario()

    }
}