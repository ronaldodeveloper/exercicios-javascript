/*
##### DATA  
## ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
*/


// exercises
const data= new Date()  // base date

 // 2. Escreva uma função JavaScript para obter a data atual.  
const formatarData= Intl.DateTimeFormat('pt',{
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})
// onsole.log(formatarData.format(data))

// 3. Escreva uma função JavaScript para obter o número de dias em um mês.


// 18. Escreva um programa JavaScript para calcular a idade.
const dataNascimento= new Date(20/12/1965)
const dataAtual= new Date()
const idade= Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
})
//onsole.log(idade.format(dataNascimento));
//console.log(idade.format(dataAtual));
const res= ' ';
console.log(res);



// crie um relógio
function relogio(){
    let clock= document.querySelector(".clock") 
    let atual= new Date();
    let tempo = Intl.DateTimeFormat('pr-BR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    let current= tempo.format(atual)
    clock.textContent= current

    setTimeout(relogio, 1000)  
}
relogio()
