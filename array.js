
// EXERCICIO N1............................

// 0- escreva um numero mais trinta por cento dele............
var n1= 68;
var v1= n1 + n1 * (30/100);
// console.log(n1 +" mais trinta por cento"+" e "+ v1);

// 0.1-  trinta por cento em cima do total de vendas mais o salario
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
let itensMaisFrequentes= [54,12,58,6,36,6,54,84,1,7,36,54,12,74,14,9,1,48,58,84,12,54]
let ordenarLista= itensMaisFrequentes.sort((a,b)=>{
    return a>b
})
// console.log(ordenarLista) // INCOMPLETO!

// 11. Escreva um programa JavaScript para encontrar a soma dos quadrados de um vetor numérico.
let vetor=[54,7,11,86,9]
let somaDosQuadradosItems= vetor.map((el)=>{
   return el**2
})
let somaDosQuadradosTotal= vetor.reduce((acc, cur)=>{
    let total = acc + cur;
    let quad= Math.pow(total, 2)
    return quad
})
// console.log(somaDosQuadradosItems)
// console.log(somaDosQuadradosTotal)

//12. Escreva um programa JavaScript para calcular a soma e o produto de um array de inteiros
function somar(a, b){
    let soma= a + b;
    let prod= a * b;

    return { soma, prod }
}
// console.log(somar(15,35))
// ou
let somaEproduto= [46,1,88,59,11,3]
let calcular= somaEproduto.reduce((acc,cur)=>{
    let soma= acc + cur;
    let prod= acc * cur;
    return prod
})
// console.log(calcular) 


// 14. Escreva um programa JavaScript para remover itens duplicados de uma matriz 
let duplicados = [5,78,99,8,5,7,78,9,8,78,2,11,99];
let removerDuplicados= [...new Set(duplicados)]
//console.log(duplicados)
//console.log(removerDuplicados)

// 17. Escreva um programa JavaScript para embaralhar um array. 
let vetorOrdenado = [1,2,3,4,5,6,7,8,9];

for (let i= 0; i > vetorOrdenado.length; i++){
    let j= Math.floor(Math.random() * 10);
    let alt= vetorOrdenado[i];
    vetorOrdenado[i] = vetorOrdenado[j]
    vetorOrdenado[j]= alt
    console.log(vetorOrdenado[i])
}
// console.log(vetorOrdenado)


// 19. Existem duas matrizes com valores individuais, escreva um programa JavaScript para calcular a soma de cada valor de índice individual das matrizes fornecidas.
  let vetorUm = [5,78,99,8,5,7,78,98,4];
let vetorDois = [9,8,78,2,11,95,78,99,8,5];
for (let i=0; i<vetorUm.length && i<vetorDois.length; i++){
     let res= vetorUm[i] + vetorDois[i];
     //console.log(res)
}

//22.  Escreva um programa JavaScript para calcular a união de duas matrizes.
let uniaoUm = [5,78,99,8,5,7,78,98,4];
let uniaoDois = [9,8,78,2,11,95,78,99,8,5];
let unirVetor= [...uniaoUm, ...uniaoDois].sort((a,b)=>{
    return a>b
});
// console.log(unirVetor)

// 23. Escreva uma função JavaScript para encontrar a diferença entre duas matrizes.
let diferencaUm = [5,78,99,9,8,5,7,78,98,4,1];
let diferencaDois = [9,8,78,2,11,95,78,99,8,5];
// diferença
function diff(arr1, arr2){
    let a= arr1.filter((el)=>{
        return !arr2.includes(el);
    })
    let b= arr2.filter((el)=>{
        return !arr1.includes(el);
    })

   console.log(`Diferença ${[...a,...b]}`)
}
diff(diferencaUm, diferencaDois)
// interseção
let intersecao= diferencaUm.filter((el)=>{
    return diferencaDois.includes(el)
})
console.log(`Interseçao ${intersecao}`)
