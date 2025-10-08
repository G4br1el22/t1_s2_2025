// essa é uma função SEM parâmetros

function hello () {
    console.log ('Oi')
}
hello () 

// essa é uma função COM parâmetros

function hello (nome) {
    console.log ('Hello, ' + nome)
}
hello ('Pedro')



function soma (a, b){
    return a + b;
}
const res = soma (2, 3)
console.log(res)
console.log ("Surpresa: "+ soma ("ban", "ana"))
console.log ("Nem tudo funciona: " + soma (true, false))

// função anônima

const dobro = function (n) {
    return n*2
}
const reso = dobro(4)
console.log ("dobro de 4: " + reso)
//  ou entao:
console.log ("dobro de 4: " + dobro(4))
// console.log ("dobro de A: " + dobro(a))           **NaN**

const quadrado = function (n=10) {
    return n * n
}

console.log ("O quadrado de 10: " + quadrado ())
console.log ("O quadrado de 15: " + quadrado (15))

// triplo é uma FUNÇÃO
const triplo = n => n*3 
console.log ("Triplo de 4: " + triplo (4))
const metade = n => {n/2}
console.log ("Metade de 9: " + metade(9))

const ePar = n => n % 2 === 0
console.log ("10 é par? " + ePar(10))
console.log ("11 é par? " + ePar(11))

