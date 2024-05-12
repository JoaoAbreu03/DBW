import React from 'react'
import { Link  } from 'react-router-dom'
import {corta} from './corta'
import config from '../config.json' //link do back end
const SERVER = config.server
const images = require.context('../../public/images', true);



export  default  class ListaDestinos extends React.Component{
    
    constructor(){
        super()
        this.state =
        {
            destinos: []
        }

    }

    async componentDidMount(){
        await this.getDestinos()
    }

    async getDestinos(){
        const destinos = await fetch(SERVER+'/Destinos')
        let data = await destinos.json()

        this.setState({destinos : data})
    }

    async delete(id){
        const res = await fetch(SERVER+'/deleteDestinos/'+ id ,  {method : 'DELETE'})
        if(res.ok){ 

            this.getDestinos()
        }else
            alert ("erro ao apagar")
    }

    /* Formulario de adicao de clientes e atualizacao de clientes */
    render(){
        return (
            <div>
                <div class="container">
                    <h1 align="center" class="mt-5">Lista de Destinos</h1>
                    {this.state.destinos.map((item) => 
                        <div class="row mt-5 back mb-5">

                            <div class="col-3">
                                <img class="img2" src={images(`./${corta(item.path)}`)} width="275px" alt=""/>
                            </div>

                            <div class="col-9">
                                <div class="ml-1">
                                    <h5>{item.titulo}</h5>
                                    <p class="paragrafo">{item.descricao}</p>

                                </div>
                                <Link>
                                    <button class="button-delete btn  btn-primary m-1" onClick={this.delete.bind(this,item._id)} >Delete</button> 
                                </Link>

                                <Link to="/Admin/updateDestino" state={{ item }}>
                                    <a class="button btn  btn-primary"  href="">Update</a>                        
                                </Link>
                            </div>

                        </div>
                    )} 
                </div>
            </div>
            
        )
    }
}