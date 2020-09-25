// Iniciando o servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configurando para o arquivos estáticos (css, scripts imagens)
server
// receber os dados do req.body
.use(express.urlencoded({ extended:true }))
.use(express.static("public"))
// Configurando as rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// Criando a porta do servidor
.listen(5500)