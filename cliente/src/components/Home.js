import React from 'react'
import {corta} from './corta'
import config from '../config.json' //link do back end
const SERVER = config.server

const images = require.context('../../public/images', true);

//Câmara de Lobos, na Ilha da Madeira, encanta com suas encostas íngremes e baía pitoresca. Reconhecida pela produção de vinho Madeira, a cidade também oferece trilhas para caminhadas, explorando sua beleza natural. Com uma rica história e vistas deslumbrantes, é um destino turístico cativante em Portugal.

export default  class Home extends React.Component{
    /* Formulario de adicao de clientes e atualizacao de clientes */

    constructor(){
        super()
        this.state =
        {
            destinos: []
        }

    }

    async componentDidMount(){
        const destinos = await fetch(SERVER+'/Destinos')
        let data = await destinos.json()

        this.setState({destinos : data})
    }


    render(){
        return (
        <div>  
            <div class="container">
                <h1 class="heading2">Destinos pela madeira</h1>
                <div id="carouselExampleFade" class="carousel slide carousel-fade mt-1" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 rounded" height="400rem" src={require("../assets/imagens/img8.jpg")} alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 rounded" height="400rem" src={require("../assets/imagens/img4.jpg")} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 rounded" height="400rem"  src={require("../assets/imagens/img5.jpg")} alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            
                <div class="mt-3">
                    <h2>Destinos</h2>
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
                            <a class="text-primary cursor-pointer">Destelhes</a>
                        </div>
                    </div>
                    )} 
                     
            
                    
                </div>
            </div>
        </div>
        )
    }
}