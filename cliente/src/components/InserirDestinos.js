import React , { useState } from 'react'
import ReactDOM from "react-dom"; 
import { v4 as uuidv4 } from 'uuid';
import config from '../config.json'//link do back end
import img from '../assets/imagens/user.png'
const SERVER = config.server


function Form() {
    
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [file, setFile] = useState(null);
    


    const upload= async (event) => {
        event.preventDefault();
    
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('titulo', titulo);
            formData.append('descricao', descricao);
            const uploadResponse = await fetch(SERVER+'/Destinos/new', {
                method: 'POST',
                body: formData
            });
            
            if(uploadResponse.ok)
                alert("inserido com sucesso")
            else
                alert("nao foi possivel inserir")
            
            
            } catch (error) {
        console.error('Erro ao fazer o upload e exibir a imagem:', error);
        }
    };
    
    
    
    return (
        
        <div>
           

            <form class="form" action=""  onSubmit={upload}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Título</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descrição do Destino</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" value={descricao} onChange={(e) => setDescricao(e.target.value)} ></textarea>
                </div> 
                <div class="mb-3">
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>    
                <div class="mb-3">
                    <input type="submit" class="salvar" value="Salvar"/>
                </div>
            </form>

        
        </div>
    );
}

    
export  default  class InserirDestinos extends React.Component{
    /* Formulario de adicao de clientes e atualizacao de clientes */
    

    render(){
        return (
            <div>
                <h5 align="center" class="mt-5 heading">Inserir Destinos</h5>
                <div class="container ">
                    <Form></Form>
                </div>

            </div>
        )
    }
}