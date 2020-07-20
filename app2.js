$(':input').on('focus', function() {
    console.log(this.id)
    if(this.id.match('data')){
        data(this.id)
    }
    if(this.id.match('Eco') || this.id.match('Valor')){
        moeda(this.id)
    }
})


function data(dado){
    let campo = document.getElementById(dado);
    campo.oninput = ({target}) => {
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
}


function moeda(dado){
    let campo = document.getElementById(dado);
    campo.addEventListener('blur', ({ target }) => {
        const dadosDoCampo = target.value
        if(!dadosDoCampo == ''){
            if(!dadosDoCampo.match(',')){
                campo.value = dadosDoCampo + ',00'
            }
        }
    })
}



botao.addEventListener('click', function(event){
    event.preventDefault();
    botao.style.display = 'none';
    window.print();
    setInterval(function(){botao.style.display = 'inline-block';}, 100);
})