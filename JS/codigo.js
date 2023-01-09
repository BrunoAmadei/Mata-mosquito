var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var temopoMosca = 1500

var dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')

if(dificuldade === 'normal'){
    //1500
    temopoMosca = 1500
}else if(dificuldade === 'dificil'){
    //1000
    temopoMosca = 1000
}else if(dificuldade ==='muitodificil'){
    //750
    temopoMosca = 750
}

function ajustarTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
   /* console.log(largura, altura)*/
}
/******************Iniciando Partida**********************/
function iniciarJogo(){
    var nivel = document.getElementById('dificuldade').value
    if(nivel === ''){
        alert('Selecione uma dificuldade para iniciar o jogo!')
        return false
    }
    window.location.href = 'AppMataMosca.html?' + nivel
}


/*************Tempo de partida e parando a criação de moscas***************/
var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href ='vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


ajustarTamanho()

/***********Posição randômica*************/
function random() {

    //removendo o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criando elementos html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + lados()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    //Ação ao clicar na mosca
    mosquito.onclick = function () {
        this.remove()
    }



    document.body.appendChild(mosquito)


}
/***********Definindo Tamanhos aleatórios***********/
function tamanhoAleatorio() {

    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}
/***********Lado Aleatorio*************/
function lados() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }

}





