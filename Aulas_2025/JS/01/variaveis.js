const a = 18;
const nome = "Gabriel"

console.log(a, nome)

// a = 12 constantes nao admitem valores novos

var x = 10
var y = 7

console.log('x = ' + x + '\ny = ' + y)

var x = "Praça Mauá"

console.log('x = ' + x)

// var admite redeclaração  

let i = 12.5

console.log('i = ' + i)

// let i = 34 let não admite redeclaração no mesmo contexto

let m = 10
var p = 20 
if (m > 2) {
    let m = 23;
    var p = 3;
    console.log ('dentro do if: \nm = ' + m + "\np = " + p )
}

console.log ("saiu do if: \nm =" + m + "\np = " + p)

let sobrenome = 'Araujo'
console.log (nome + " " +sobrenome)

console.log (`meu nome é ${nome}`)

// coerção implícita (concatenação):
const n1 = 2
const n2 = '3'
const n3 = n1 + n2;
console.log(n3);

// coerção explícita (soma):
const n4 = n1 + Number (n2)
console.log(n4)

// a classe number é a 'evolução' da forma primitiva number
//  NaN: not a number


