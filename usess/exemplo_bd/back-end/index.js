/* REQUIRES NECESSARIOS PARA FUNCIONAR npm i express cors mysql */
const express = require('express')
const cors = require('cors')
const app = express()
const config = require('./config.json')//configs
const mysql = require('mysql')
const PORT = config.port//porta
app.use(express.json())//poder capturar body nas requisicoes post, update e delete
const connection = mysql.createConnection(config.sql_server)//criar conexao com a base de dados
app.use(cors())//ignorar politica para evitar problemas

/*
Este exemplo e so basiado numa tabela que é de clientes
Fiz um CRUD simples guardando tudo numa base dados sql
*/

app.get('/getClients', async (req, res) => {//Buscar todos os clientes
    connection.query('SELECT * FROM clientes', (err, rows, fields) => {
        if(err) res.end(err)
        res.end(JSON.stringify({clientes : rows}))
    })  
})

app.post('/addClient', async (req, res) => {//adicionar um cliente
    const body = req.body//json com dados para inserir na base de dados
    connection.query(`INSERT INTO clientes (nome, morada, nif) VALUES ('${body.nome}', '${body.morada}', '${body.nif}')`, (err, rows, fields) => {
        if(err) res.end(err)
        res.end('Adicionado com sucesso')
    })
})

app.delete('/delUser/:id', async (req, res) => {//apagar cliente
    //req.params capturar parametros do url comecados por :
    connection.query(`DELETE FROM clientes WHERE id = ${req.params.id}`, (err, rows, fields) => {
        if(err) res.end(err)
        res.end('Apagado com sucesso')
    })
})

app.post('/updateUser/:id', async (req, res) => {//atualizar utilizador
    const body = req.body//json com dados para inserir na base de dados
    connection.query(`UPDATE clientes SET nome = '${body.nome}', morada =  '${body.morada}', nif = '${body.nif}' WHERE id = ${req.params.id}`, (err, rows, fields) => {
        if(err) res.end(err)
        res.end('Atualizado com sucesso')
    })
})

app.get('/getClient/:id', async (req, res) => {
    connection.query(`SELECT * FROM clientes WHERE id = ${req.params.id}`, (err, rows, fields) => {
        if(err) res.end(err)
        res.end(JSON.stringify(rows[0]))
    })  
})


app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`)
})
