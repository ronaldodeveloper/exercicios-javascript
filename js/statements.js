/*
    ##########  STATEMENTS  ###########
 */

// 1. Escreva um programa JavaScript que aceite dois inteiros e exiba o maior.
let a= 35;
let b= 45;
if(a > b){ 
   // console.log(`${a} é maior que ${b}`)
}else{
   // console.log(`${b} é maior que ${a}`)
}

// 2. Escreva uma declaração condicional em JavaScript para encontrar o sinal do produto de três números.

let sinalA= -10; 
let sinalB= 20; 
let sinalC= 30;  
if(sinalA > 0 && sinalB > 0 && sinalC > 0){
 //console.log(`não a sinal em numeros negativos`)
}
if(sinalA < 0 && sinalB > 0 && sinalC > 0){
  //  console.log(`em ${sinalA} contem um sinal de negativo`)
}
if(sinalA > 0 && sinalB < 0 && sinalC > 0){
   // console.log(`em ${sinalB} contem um sinal de negativo`)
}
if(sinalA > 0 && sinalB > 0 && sinalC < 0){
  //  console.log(`em ${sinalC} contem um sinal de negativo`)
}
if(sinalA < 0 && sinalB < 0 && sinalC > 0){
  //  console.log(`tanto em ${sinalA} quanto em ${sinalA} contem o sinal de negativo "-" `)
}



// 6. Escreva um programa JavaScript que calcule as notas médias dos seguintes alunos. Em seguida, essa média é usada para determinar a nota correspondente.

const alunos=[
    { nome: 'Robert', nota: 8 },
    { nome: 'Steve',  nota: 9.2 },
    { nome: 'Julia',  nota: 8.5 },
    { nome: 'Katia',  nota: 7 },
    { nome: 'Pedro',  nota: 4.5 },
    { nome: 'Aline',  nota: 5 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Bruna',  nota: 9.5 },
    { nome: 'Alana',  nota: 5.5 },
    { nome: 'Patric',  nota: 3 },
    { nome: 'Henrique', nota: 7.3 },
    { nome: 'John',  nota: 9.7 },
    { nome: 'Ancelmo',  nota: 4 },
    { nome: 'Juliano',  nota: 6.4 },
    { nome: 'Sebastião', nota: 8.6 },
    { nome: 'Luan',  nota: 10 }
]
const alunosA= alunos.filter((el)=>{
    if(el.nota >= 9){ return el}
}).map(el=>{ 
   //console.log(` ${el.nome} tem nota ${el.nota} e recebe média A`)
})

const alunosB= alunos.filter((el)=>{
      if(el.nota >= 7 && el.nota < 9){ return el}
}).map(el=>{ 
   //console.log(` ${el.nome} tem nota ${el.nota} e recebe média B`)
})

const alunosC= alunos.filter((el)=>{
   if(el.nota >= 5 && el.nota < 7){ return el}
}).map(el=>{ 
   //console.log(` ${el.nome} tem nota ${el.nota} e recebe média C`)
})

const alunosD= alunos.filter((el)=>{
   if(el.nota < 5){ return el}
}).map(el=>{ 
   //console.log(` ${el.nome} tem nota ${el.nota} e recebe média D`)
})

// 7. Escreva um programa JavaScript que itere os inteiros de 1 a 100. Mas para múltiplos de três imprima "Fizz" e para os múltiplos de cinco imprima "Buzz". Para números que são múltiplos de três e cinco imprimem "FizzBuzz".

for (let i= 0; i <= 100 ; i++){
   if(i % 3 == 0 && i % 5 == 0) {
   //  console.log(i + " FizzBuzz")
   }
   if(i % 3 == 0){ 
     // console.log(i +" Fizz")
   }
   if(i % 5 == 0) {
    //  console.log(i + " Buzz")
   }
}

