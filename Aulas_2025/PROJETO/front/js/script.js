const protocolo = "http://"
const baseURL = "localhost:3000"
const filmesEndpoint = "/filmes"

async function obtemFilmes() {
    const URLCompleta = `${protocolo}${baseURL}${filmesEndpoint}`
    const filmes = (await axios.get(URLCompleta)).data
    console.log(filmes)
}
