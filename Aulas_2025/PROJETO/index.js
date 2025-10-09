// console.log('Hello, NodeJS')

const express = require ('express')
const app = express()
app.use(express.json())

// endpoint para atender um get oi: http://localhost:3000/oi
// URL: protocolo//maquina(localhost):porta/endpoint
// req = requisições, res = response

app.get("/oi", (req, res) => {
    res.send('olá')
})




app.listen(3000, () => console.log ("up and running"))    
// app.listen (porta, ação)                                                  *** porta padrão: 3000 -> canal de comunicação ***  


// cadastrar novo filme: post filmes; http://localhost.3000/filmes
app.post('/filmes',(req,res) => {
    //montar um objetvo json filme com as ifnformaçõs recebidas
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    const filme = {titulo: titulo, sinopse: sinopse}
    //  inserir o novo filme na bse filmes, NA MEMÓÓÓRIA
    filmes.push(filme)
    // só para verificar: envia a base aualizada
    res.send(filmes)
})

//  endpoint para atender um get filmes: http//localhost:3000/filmes
app.get('/filmes', (req, res) => {
    res.send(filmes)
} )
let filmes = [{
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse: 
    "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções."
    },
    {
    titulo: "Um Sonho de Liberdade",
    sinopse:
     "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
    }
    ];

