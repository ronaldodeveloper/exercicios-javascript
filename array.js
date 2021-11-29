
// EXERCICIO N1............................

// 0- escreva um numero mais trinta por cento dele............
var n1= 68;
var v1= n1 + n1 * (30/100);
// console.log(n1 +" mais trinta por cento"+" e "+ v1);

// 0- 
var sal= 1200;
var vendas= 23000;
var com= vendas * (15/100);
// console.log(com)
// console.log(43 * 15/100)


// 1- Escreva uma função JavaScript para verificar se uma `entrada` é um array ou não.
let arr= [45,'john',true, null]
if (toString.call(arr) === "[object Array]"){
 // console.log('é um array...')  
}
 //console.log(toString.call(arr))
//  console.log(typeof arr)

// 2. Escreva uma função JavaScript para clonar um array. 
function clonar(arg){
    return arg.slice(0)
   // console.log("array clone " + x)
}
let arrClone= [15,87,'clonar', true,20, '45']
let spread= [...arrClone]
let from= Array.from(arrClone)

// console.log("array original " + arrClone)
// console.log("clonando array com function: "+ clonar(arrClone))
// console.log("clonando array com spread: "+ spread)
// console.log("clonando array com Array.from(): "+ from)

//3. Escreva uma função JavaScript para obter o primeiro elemento de uma 
// matriz.  Passar um parâmetro 'n' retornará os primeiros 'n' elementos da matriz.

function getElement(n){
    let arr= [45,58,79,21,36,25,71, 36]
    let fil = arr.filter((el)=>{  
            return el === n    
    })
    return fil
}
// console.log(getElement(36))
// console.log(getElement(10))

// 5. Escreva um programa JavaScript simples para juntar todos os elementos da seguinte matriz em uma string.
let arrayStr= ['John', 54, true, 5.2,'Mariah']
let juntar= arrayStr.toString()
let juntar2= arrayStr.join(' ')
// console.log(juntar)
// console.log(juntar2)


// 8. Escreva um programa JavaScript para encontrar o item mais frequente de um array.
let arrItem= [54,12,58,6,36,6,54,84,1,7,36,54,12,74,14,9,1,48,58,84,12,54]
let maisFrequente= arrItem.filter((el, ind)=>{
    
    return el === (ind)
})
console.log(maisFrequente) 