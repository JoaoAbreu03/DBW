import React from 'react'
import Css from '../css/style.css'
export default class Clientes extends React.Component{
    /* Tabela com listagem de clientes */
    render(){
        return (
            <div>
                <h3>Clientes</h3>
                <table className="table-manage">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Morada</th>
                            <th>Nif</th>
                            <th>Edição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.clientes.map((item) => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.morada}</td>
                                <td>{item.nif}</td>
                                <td>
                                    <div>
                                        <button onClick={this.props.apagar.bind(this, item.id)}>Delete</button> 
                                        <button onClick={this.props.editar.bind(this, item)}>Update</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}