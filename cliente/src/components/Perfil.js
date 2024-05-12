import React , { useState } from 'react'
import { getCookie } from './getCookie';
import { corta } from './corta';
import config from '../config.json'
const SERVER = config.server
const images = require.context('../../public/images', true);

function Form() {
    
    const [file, setFile] = useState(null);
    
    const upload= async (event) => {
        event.preventDefault();
        
        try {
            let id = getCookie("id")
            alert(getCookie("id"))
            const formData = new FormData();
            formData.append('file', file);
            const uploadResponse = await fetch(SERVER+'/updateUsers/'+id, {
                method: 'POST',
                body: formData
            });
            if(uploadResponse.ok){
                let usr = await uploadResponse.json();
                console.log(usr)
                alert("Aleterada com sucesso")
                document.cookie = "path = "+usr.path+"; expires = " + new Date(Date.now()+1000*60*20).toUTCString();
            }
            else
                alert("Nao foi possivel inserir")
        } 
        catch (error) {
            console.error('Erro ao ao inserir a imagem:', error);
        }
    };
    
    
    
    return (
        
        <div>
           
            
            <form class="w-50"action=""  onSubmit={upload}>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" onChange={(e) => setFile(e.target.files[0])  } />
                    <label class="custom-file-label" for="customFile">Esclher uma foto nova</label>
                </div>
                 {/* <div class="mb-3">
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>     */}
                <input type="submit"  value="Salvar" />
            </form>

        
        </div>
    );
}

export  default class Perfil extends React.Component {
    /* Formulario de adicao de clientes e atualizacao de clientes */
    constructor(){
        super()
        this.state = {
            nome: "",
            path: ""

        }
    }

    async componentDidMount(){
        await this.getUser(getCookie("id"))
    }

    async getUser(id){
        let res = await fetch(SERVER+'/user/'+id)
        if(res.ok){
            let data = await res.json()
            this.setState({nome : data.email})
            this.setState({path : data.path})
        }else{
            alert("Nao foi possivel capturar os dados")
        }
    }
    render(){
        return (
            <div class="body-perfil">
                <div class="container">
                    <h1 align="center" class="headPerfil">Perfil</h1>
                    <div align="center" class="icon">
                        <img src={images(`./${corta(this.state.path)}`)} width="150px" alt="imagem perfil"/>
                        <p class="mt-2">Email : {this.state.nome}</p>
                        <Form></Form>
                    </div>
                    
                </div>
            </div>
        )
    }
}