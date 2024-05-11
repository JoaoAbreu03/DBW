import React from 'react'
import Clientes from './Clientes'//tabela para mostrar clientes
import AddClient from './AddClient'//Formulario de adição de clientes
import config from '../config.json'//link do back end
const SERVER = config.server
export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            clientes : [],
            nome : '',
            morada : '',
            nif : '',
            flash_message : '',
            edit : false
        }
        
    }

    async componentDidMount(){
        await this.bringData()//Chamar os clientes antes do componente ser renderizado
    }

    async bringData(){/* Buscar os clientes e guardar nas variaveis de estado */
        const clientes = await fetch(SERVER+'/getClients')
        let data = await clientes.json()
        console.log(data.clientes)
        this.setState({clientes : data.clientes})
    }

    /* Setar fields de adicao a base de dados do formulario */ 
    setNome(value){
        console.log(value.target.value)
        this.setState({nome : value.target.value})
    }

    setMorada(value){
        console.log(value.target.value)
        this.setState({morada : value.target.value})
    }

    setNif(value){
        console.log(value.target.value)
        this.setState({nif : value.target.value})
    }

    async guardar(e){
        e.preventDefault()
        console.log(this.state)
        let res        
        !this.state.edit ? res = await fetch(SERVER+'/addClient', {method : 'POST', body : JSON.stringify({nome : this.state.nome, morada : this.state.morada, nif : this.state.nif }), headers : {'Content-Type' : 'application/json'}}) : res = await fetch(SERVER+'/updateUser/'+this.state.id, {method : 'POST', body : JSON.stringify({id : this.state.id,nome : this.state.nome, morada : this.state.morada, nif : this.state.nif }), headers : {'Content-Type' : 'application/json'}})
        if(res.ok){
            await this.bringData()
            !this.state.edit ? this.flashMsg('Adicionado com sucesso') : this.flashMsg('Atualizado com sucesso')
            this.resetForm()
            //this.setState({id : null, edit : false})
            return
        }
        !this.state.edit ? this.flashMsg('Erro ao adicionar') : this.flashMsg('Erro ao atualizar')
    }

    async apagar(id){//apagar utilizador
        console.log(id)
        const res = await fetch(SERVER+'/delUser/'+id, {method : 'DELETE'})
        if(res.ok){
            await this.bringData()
            this.flashMsg('Apagado com sucesso')
            return
        }
        this.flashMsg('Erro ao apagar')
    }

    flashMsg(msg){//Mensagens de ocerrencia de erro ou sucesso
        this.setState({flash_message : msg})
        setTimeout(() => {
            this.setState({flash_message : ''})
        }, 2000)
    }

    editar(item){//indicar ao formulario que vai ser feita uma edicao e setar os campos com os dados
        item.edit = true
        this.setState(item)
    }

    resetForm(){//dar reset a todos os dados do formulario
        this.setState({nome : '', morada : '', nif : '', edit : false, id : null})
    }

    render(){
        return (
            <div>
                <AddClient nomeChange={this.setNome.bind(this)} moradaChange={this.setMorada.bind(this)} nifChange={this.setNif.bind(this)} guardar={this.guardar.bind(this)} nome={this.state.nome} morada={this.state.morada} nif={this.state.nif} editar={this.state.edit}/>
                <p className="flash_data">{this.state.flash_message}</p>
                <Clientes clientes={this.state.clientes} apagar={this.apagar.bind(this)} editar={this.editar.bind(this)}/>
            </div>
        )
    }
}