// criando vetores:
v1 = []
console.log(v1)

// o acesso a vetores pode ser posição por posição 
// OBS.: um vetor sempre começa no 0, ou seja, v1[0]
console.log(v1[2]) // exibindo a terceira posição
console.log(v1)

v1[0] = 32
v1[1] = 'Ana'
v1[7] = 4.5
console.log (v1)

console.log('tamanho do vetor: ' + v1.length)

// iterando
v1[5] = true
for (i = 0; i < v1.length; i++){
    console.log(v1[i])
}

