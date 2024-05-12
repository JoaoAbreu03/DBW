import React from 'react'
import { Link  } from 'react-router-dom'
import {corta} from './corta'
import config from '../config.json' //link do back end
const SERVER = config.server
const images = require.context('../../public/images', true);

export  default  class GerirUtilizadores extends React.Component{
    constructor(){
        super()
        this.state =
        {
            user: []
        }

    }

    async componentDidMount(){
        await this.getUsers()
    }

    async getUsers(){
        const user = await fetch(SERVER+'/user')
        let data = await user.json()
        this.setState({user : data})
    }

    async delete(id){
        const res = await fetch(SERVER+'/deleteusers/'+ id ,  {method : 'DELETE'})
        if(res.ok){ 
            this.getUsers()
        }else
            alert ("erro ao apagar")
    }

    /* Formulario de adicao de clientes e atualizacao de clientes */
    render(){
        return (
            <div>
                <div class="container">
                    <h1 align="center" class="mt-5">Lista de Utilizadores</h1>
                    {this.state.user.map((item) => 
                        <div class="row mt-5 back mb-5">

                            <div class="col-3">
                                <img class="img2" src={images(`./${corta(item.path)}`)} width="150px" alt=""/>
                            </div>

                            <div class="col-9">
                                <div class="ml-1">
                                    <h5>{item.email}</h5>
                                </div>
                                <Link>
                                    <button class="button-delete btn  btn-primary m-1 mt-3" onClick={this.delete.bind(this,item._id)} >Delete</button> 
                                </Link>

                            </div>

                        </div>
                    )} 
                </div>
            </div>


        )
    }
}

