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
console.log(formatarData.format(data))

// 3. Escreva uma função JavaScript para obter o número de dias em um mês.
