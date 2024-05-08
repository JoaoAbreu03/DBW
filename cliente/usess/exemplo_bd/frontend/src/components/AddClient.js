import React from 'react'

export default class AddClient extends React.Component{
    /* Formulario de adicao de clientes e atualizacao de clientes */
    render(){
        return (
            <>
                <h2>Adicionar cliente</h2>
                <form onSubmit={this.props.guardar.bind(this)}>
                    <label>Nome</label><br />
                    <input type="text" id="nomeAdd" value={this.props.nome} onChange={this.props.nomeChange.bind(this)}/><br />
                    <label>Morada</label><br />
                    <input type="text" id="nifAdd" value={this.props.morada} onChange={this.props.moradaChange.bind(this)}/><br />
                    <label>Nif</label><br />
                    <input type="number" id="nifAdd" value={this.props.nif} onChange={this.props.nifChange.bind(this)}/><br />
                    <input type="hidden" id="edit" value={this.props.edit} />
                    <input type="submit" value="Adicionar" />
                </form>
            </>
        )
    }
}