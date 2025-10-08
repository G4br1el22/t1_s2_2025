const nomes = ["Alexandre", "Romeu", "Ana", "Juliet", "Amanda"]

const apenasComA = nomes.filter ((n) => n.startsWith("A"));
console.log (apenasComA) 

const primeirasLetras = nomes.map (n => n.charAt("0"))
console.log (primeirasLetras)

const todosComecamComA = nomes.every (n => n.startsWith("A"))
console.log("Todos começam com A? " + todosComecamComA)

// Acumuladores (reduce)

const numeros = [1, 2, 3, 4, 5]
const soma = numeros.reduce ((acum, n) => acum + n)
console.log("A soma total é " + soma)

