var app = require('express')()
var http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
})
const config = require('./config.json')
const cors = require('cors')
const PORT = config.port
app.use(cors())


http.listen(PORT, () =>{
    console.log(`Listening in port ${PORT}`)
})

let username = []
let counter = 0
let messages = []
io.on("connection", (socket) => {
    console.log("New client connected")
    socket.emit('connection', counter++)//atribuir id ao cliente

    socket.emit("message", messages)
    
    socket.on('chat-message', (content) => {//adicionar mensagem e enviar o chat com todas as mensagens 
      messages.push(`Message sent by ${!username[content.id] ? 'Sem nome' : username[content.id]}: ${content.msg}`)
      console.log(`Message sent by ${!username[content.id] ? 'Sem nome' : username[content.id]}: ${content.msg}`)
      io.emit('message', messages)
    })

    socket.on('disconnect', () => {//disconectar cliente
      console.log('user disconnected')
    })

    socket.on('set-username', (content) => {//alterar username
      username[content.id] = content.username
    })
})


app.get('/test/:msg', (req, res) =>{
    res.end(JSON.stringify({msg : `Mensagem enviada ${req.params.msg}`}))
})