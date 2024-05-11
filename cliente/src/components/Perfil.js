import React from 'react'

export  default class Perfil extends React.Component {
    /* Formulario de adicao de clientes e atualizacao de clientes */
    render(){
        return (
            <div class="body-perfil">
                <div class="container">
                    <h1 align="center" class="headPerfil">Perfil</h1>
                    <div align="center" class="icon">
                        <img src={require('../assets/imagens/user.png')} width="150px" alt="imagem perfil"/>
                        <p class="mt-4">Nome : Daniel Silva</p>
                        <p>Email : 2119822@student.pt</p>
                    </div>

                </div>
            </div>
        )
    }
}