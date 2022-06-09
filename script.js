
//selecionar o input com o número digitado
let valorDigitado = document.querySelector('#valorEmReal')

//selecionar os elementos radio (criar um array deles)
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

//selecionar botões
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

//cotações 08/06/2022
let valorDoDolar = 4.90
let valorDoEuro = 5.25
let valorDaLibra = 6.14
let valorDoBitcon = 148336.95 //18:13
let valorEmReal = 0

let moedaEstrangeira = ''
let moedaConvertida = ''

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Moeda Convertida " + moedaConvertida)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', { style: 'currency',
    currency: 'BRL' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
}

//VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER
function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled','disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

// REATIVAR BOTAO
function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Não ativou')
    }
}


//VERIFICAR QUAL BOTAO RADIO ESTA MARCADO
//vincular a verficação de um evento, click no botão Converter
btnConverter.addEventListener('click', function() {
    //fazer o parseFloat dos valores monetarios (converter string para Float)
    valorEmReal = parseFloat(valorDigitado.value)

    console.log('Escolha a moeda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

    switch(moedaEstrangeira) {

        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

        case 'Libra':
            moedaConvertida = valorEmReal / valorDaLibra
            
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break

        case 'Bitcoin':
            moedaConvertida = valorEmReal / valorDoBitcon
            
            mensagemFormatada(moedaConvertida.parseFloat(moedaConvertida).toFixed(5))
        break

        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }

    btnLimpar.addEventListener('click', function() {
        valorDigitado.focus()
        valorDigitado.value = ''
        aviso.textContent = 'Digite o valor, escolha a moeda e converter'
        moedaSelecionada[0].checked = false
        moedaSelecionada[1].checked = false
        moedaSelecionada[2].checked = false
        moedaSelecionada[3].checked = false
    })

})


