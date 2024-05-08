import React from 'react'
import { Link } from 'react-router-dom'
export  default class Admin extends React.Component{
    /* Formulario de adicao de clientes e atualizacao de clientes */
    render(){
        return (
            <div class="container">
                <h3 align="center" class="mt-5 heading">Gerenciamento</h3>
                <div class="row">
                    <div class="col-sm-6 col-md-6 mt-5">
                        <Link to="/Admin/ListaDestinos">
                        
                        <a type="button" class="btn btn-light cards p-50 marg" href="" >Lista de Destinos</a>
                        </Link>
                    </div>
                    <div class="col-sm-6 col-md-6 mt-5">
                        <Link to="/Admin/InserirDestinos">
                            <a type="button" class="btn btn-light cards" href="">Inserir Destinos</a>

                        </Link>
                    </div>
                    <div class="col-sm-6 col-md-6 mt-5"> 
                        <Link to="/Admin/ContactUsAdmin">
                            <a type="button" class="btn btn-light cards marg" href="">Contact US</a>

                        </Link>
                    </div>
                    <div class="col-sm-6 col-md-6 mt-5">
                        <Link to="/Admin/GerirUtilizadores">
                            <a type="button" class="btn btn-light cards" href="">Gerir Utilizadores</a>

                        </Link>
                    </div>   
                </div>

            </div> 
        )
    }
}