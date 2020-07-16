let botao = document.getElementById('botao')
let campo = document.querySelectorAll('dados1')
let campoEconomia = document.getElementById('dados2')
let campoValor = document.getElementById('dados3')


campo.oninput =  ({ target }) => {
    const dadosDoCampo = target.value
    if(dadosDoCampo != ''){
        if(dadosDoCampo.length == 2){
            campo.value = dadosDoCampo + '/'
        }
        if(dadosDoCampo.length == 5){
            campo.value = dadosDoCampo + '/'
        }
        if(dadosDoCampo.match('//')){
            campo.value = ''
        }
    }
}


campoEconomia.addEventListener('blur', ({ target }) => {
    const dadosDoCampo = target.value
    if(!dadosDoCampo == ''){
        if(!dadosDoCampo.match(',')){
            campoEconomia.value = dadosDoCampo + ',00'
        }
    }
})


campoValor.addEventListener('blur', ({ target }) => {
    const dadosDoCampo = target.value
    if(!dadosDoCampo == ''){
        if(!dadosDoCampo.match(',')){
            campoValor.value = dadosDoCampo + ',00'
        }
    }
})





botao.addEventListener('click', function(event){
    event.preventDefault();
    botao.style.display = 'none';
    window.print();
    setInterval(function(){botao.style.display = 'inline-block';}, 100);
})