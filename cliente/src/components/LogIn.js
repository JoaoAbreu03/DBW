import React from 'react'


import { Link  } from 'react-router-dom'


import config from '../config.json' //link do back end
const SERVER = config.server

export default class LogIn extends React.Component{

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

        let res = await fetch(SERVER+'/userLogIn', {method : 'POST', body : JSON.stringify({email : this.state.nome, password : this.state.pass }), headers : {'Content-Type' : 'application/json'}}) 
        
        if(res.ok){
            let path = await res.json()
            document.cookie = "Auth = true; expires = " + new Date(Date.now()+1000*60*20).toUTCString;
            document.cookie = "path = "+path.path+"; expires = " + new Date(Date.now()+1000*60*20).toUTCString;
            window.location.replace("http://localhost:3000/");
            return
        }
        alert("Palavra-Passe incorreta")
    }

    
    render(){
        
        return (
            <div class=" body-login ">
                <div class="container ">
                    <div class="col-2"></div>
                    <div class="col-9 col">
                        <div class="row">
                            <div class="col-4 col2 col3">
                                <div align="center">
                                    <svg class="img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"/></svg>
                                    <h3>Bem-vindo</h3>
                                    <p>Ainda não tem conta, faça a sua!</p>
                                    <Link to="/Register">
                                        <a  class="btn btn-primary button button-secundary">Fazer Registo</a>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-8">
                                <h1 align="center" class="heading">Login</h1>

                                <form class=" cardlogin" onSubmit={this.validar.bind(this)}>
                                        <div class="mb-3">  
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="text" class="form-control" aria-describedby="emailHelp"  value={this.state.nome} onChange={this.nomeChange.bind(this)}/>
                                        </div>
                                
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                            <input type="password" class="form-control" value={this.state.pass} onChange={this.passChange.bind(this)} />
                                            <a href="">Esqueci-me da palavra passe</a>
                                        </div> 
                                        
                                        <div align="center">
                                            
                                            <button type="submit" class="button btn  btn-primary">Entrar</button>

                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}