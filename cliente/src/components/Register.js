import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

import config from '../config.json'//link do back end
const SERVER = config.server

export default class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            pass: ''
        };
    }
    nomeChange(event) {
        this.setState({nome: event.target.value});
    }
    passChange(event) {
        this.setState({pass: event.target.value});
    }

    componentDidMount() {
        document.getElementById('nav').style.display = "none";

    }
    componentWillUnmount() {
        document.getElementById('nav').style.display = "";

    }
    async validar(e){
        e.preventDefault()

        let res = await fetch(SERVER+'/users/new', {method : 'POST', body : JSON.stringify({email : this.state.nome, password : this.state.pass }), headers : {'Content-Type' : 'application/json'}}) 
        console.log(res)

        if(res.ok){
            alert("OK")
            return 
        }
        alert("Errro")
    }

    /* Formulario de adicao de clientes e atualizacao de clientes */
    render(){
        return (
            <div class=" body-login ">
                <div class="container ">
                    <div class="col-2"></div>
                    <div class="col-9 col">
                        <div class="row">
                            <div class="col-8">
                                <h1 align="center" class="heading">Registe-se</h1>

                                <form class=" cardlogin" onSubmit={this.validar.bind(this)}>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.nome} onChange={this.nomeChange.bind(this)} />
                                        </div>
                                
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" value={this.state.pass} onChange={this.passChange.bind(this)} />
                                            <a href="">Esqueci-me da palavra passe</a>
                                        </div> 
                                        
                                        <div align="center">
                                            <button type="submit" class="button btn  btn-primary">Criar</button>
                                        </div>
                                </form>
                            </div>
                            <div class="col-4 col2">
                                <div align="center">
                                    <svg class="img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"/></svg>
                                    <h3>Bem-vindo</h3>
                                    <p>Entre na sua conta agora! </p>
                                    <Link to="/LogIn">
                                        <a class="btn btn-primary button button-secundary">Fazer login</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}