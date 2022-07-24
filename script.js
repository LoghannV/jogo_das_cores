//Constantes

const container = document.getElementById('container')
const divs = document.querySelectorAll("#container div")
const h2 = document.querySelector('h2')


//Funções

let sorteio = ()=>{
    return Math.round(Math.random()*255)
}
let sortear_div = ()=>{
    return Math.round(Math.random()*8)
}
const gameend = ()=>{
    escolha = prompt("Deseja jogar novamente? (Y/N)")
    if(escolha=='Y' || escolha=='y'){
        location.reload()
    }else{
        alert("Obrigado por jogar")
        window.close()
    }
}

const sortear = function(){
    let num_sorteado = sorteio()+", "+sorteio()+", "+sorteio()
    h2.innerHTML = 'rgb('+num_sorteado+')'
    container.style.backgroundColor = 'rgb('+sorteio()+","+sorteio()+","+sorteio()+')'
    divs.forEach((element)=>{
        element.style.backgroundColor = 'rgb('+sorteio()+","+sorteio()+","+sorteio()+')'
        element.addEventListener('click',function(){
            if(window.getComputedStyle(this).backgroundColor == 'rgb('+num_sorteado+')'){
                h2.innerHTML = "Voce Ganhou"
                gameend()
            }else{
                h2.innerHTML = "Cor errada"
                gameend()
            }
        })
    })
    divs[sortear_div()].style.backgroundColor = 'rgb('+num_sorteado+')'
}

sortear()