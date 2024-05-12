import React , { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import config from '../config.json'//link do back end

const SERVER = config.server
function Form() {
    const { state } = useLocation();
    const [titulo, setTitulo] = useState(state.item.titulo);
    const [descricao, setDescricao] = useState(state.item.descricao);
    const [file, setFile] = useState(null);


    const upload= async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('titulo', titulo);
            formData.append('path', state.item.path);
            formData.append('descricao', descricao);

            const uploadResponse = await fetch(SERVER+'/updateDestino/'+state.item._id,  {
                method: 'POST',
                body: formData
            });
            
            if(uploadResponse.ok){
                alert("inserido com sucesso")
                window.history.back()
            }
            else
                alert("nao foi possivel inserir")
            
            
            } catch (error) {
        console.error('Erro ao ao inserir a imagem:', error);
        }
    };
    
    
    
    return (
        
        <div>
            <form class="form" action=""  onSubmit={upload}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Título</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descrição do Destino</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" value={descricao} onChange={(e) => setDescricao(e.target.value)} ></textarea>
                </div> 
                <div class="mb-3">
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>    
                <div class="mb-3">
                    <button type="submit" class="salvar rounded" > Salvar  </button>
                </div>
            </form>
        </div>
    );
}

    
export  default  class updateDestinos extends React.Component{
    /* Formulario de adicao de clientes e atualizacao de clientes */
    

    render(){
        return (
            <div>
                <div>
                <h5 align="center" class="mt-5 heading">Update Destinos</h5>
                <div class="container ">
                    <Form></Form>
                </div>

            </div>

            </div>
        )
    }
}