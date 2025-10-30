const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

const Filme = mongoose.model("filme", mongoose.Schema({
    titulo: { type: String },
    sinopse: { type: String }
}))

// json = lista de pares chave valor

// endpoint para atender um get oi: http://localhost:3000/oi
// URL: protocolo//maquina(localhost):porta/endpoint
// req = requisições, res = response

//função de conexão com o banco 

const stringConexao = process.env.CONEXAO_BD
async function conectarAoMongoDB() {
    await mongoose.connect(stringConexao)
}

app.get("/oi", (req, res) => {
    res.send('olá')
})


// app.listen (porta, ação)                                                  * porta padrão: 3000 -> canal de comunicação *  

app.listen(3000, () => {
    try {
        conectarAoMongoDB()
        console.log("up and running")
    }
    catch (e) {
        console.log("erro:" + e)
    }
})

// cadastrar novo filme: post filmes; http://localhost.3000/filmes
app.post('/filmes', async (req, res) => {
    //montar um objetvo json filme com as ifnformaçõs recebidas
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    // construir um objeto da classe filme
    const filme = new Filme({ titulo: titulo, sinopse: sinopse })
    // enviar o filme p o banco 
    await filme.save()
    // buscar a coleção do banco atualizada 
    const filmes = await Filme.find()
    // só para verificar: envia a base aualizada
    res.json(filmes)
})

//  endpoint para atender um get filmes: http//localhost:3000/filmes

app.get('/filmes', async (req, res) => {
    const filmes = await Filme.find()
    res.json(filmes)
})

// let filmes = [{
//     titulo: "Forrest Gump - O Contador de Histórias",
//     sinopse:
//         "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções."
// },
// {
//     titulo: "Um Sonho de Liberdade",
//     sinopse:
//         "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
// }
// ];

const usuarioSchema = mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true }
})
usuarioSchema.plugin(uniqueValidator)
const Usuario = mongoose.model("Usuário", usuarioSchema)

app.post('/signup', async (req, res) => {
    try {
        //captura oque o usuario digita 
        const login = req.body.login
        const password = req.body.password
        //criptografando a senha
        const passwordCriptografada = bcrypt.hash(password, 10)
        //constroi o objeto usuário
        const usuario = new Usuario({
            login: login,
            password: passwordCriptografada
        })
        //salvar o usuario, capturando a resposta do Mongo
        const respostaMongo = await usuario.save()
        console.log(respostaMongo)
        res.status(201).end()
    }
    catch (exception) {
        console.log(exception)
        res.status(409).end()
    }
})
