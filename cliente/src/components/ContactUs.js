import React , { useState } from 'react'
import config from '../config.json'//link do back end
import img from '../assets/imagens/user.png'
import { getCookie } from './getCookie';
import { corta } from './corta';
const SERVER = config.server


function Form() {
    
    const [user, setUser] = useState(getCookie("id"));
    const [mensagem, setMensagem] = useState("");
    


    const upload= async (event) => {
        event.preventDefault();
    
        try {
            const formData = new FormData();

            alert(user)
            alert(mensagem)
            formData.append('mensagem', mensagem);
            formData.append('user', user);
            const uploadResponse = await fetch(SERVER+'/contactUs/new', {
                method: 'POST',
                body:  JSON.stringify({user : user, mensagem : mensagem }), 
                headers : {'Content-Type' : 'application/json'}
            });
            
            if(uploadResponse.ok)
                alert("inserido com sucesso")
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
                    <label for="exampleFormControlTextarea1" class="form-label">Mensagem:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" value={mensagem} onChange={(e) => setMensagem(e.target.value)} ></textarea>
                </div> 
                <div class="mb-3">
                    <input type="submit" class="salvar" value="Salvar"/>
                </div>
            </form>

        
        </div>
    );
}

    
export  default  class ContactUs extends React.Component{
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