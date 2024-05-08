import React from 'react'
import Clientes from './Clientes'//tabela para mostrar clientes
import AddClient from './AddClient'//Formulario de adição de clientes
import Nav from './Nav'//Formulario de adição de clientes
import Admin from './Admin'//Formulario de adição de clientes
import ContactUs from './ContactUs'//Formulario de adição de clientes
import LogOut from './LogOut'//Formulario de adição de clientes
import Perfil from './Perfil'//Formulario de adição de clientes
import ContactUsAdmin from './ContactUsAdmin'//Formulario de adição de clientes
import ListaDestinos from './ListaDestinos'//Formulario de adição de clientes
import InserirDestinos from './InserirDestinos'//Formulario de adição de clientes
import GerirUtilizadores from './GerirUtilizadores'//Formulario de adição de clientes
import config from '../config.json'//link do back end
import {BrowserRouter as Router,    Routes, Route} from 'react-router-dom'

const SERVER = config.server
export default class App extends React.Component{
    render(){
        return (
            
            <div>
                
                <Router>
                    <Nav/>
                    <Routes>
                        
                        <Route path="Admin"  element={<Admin/>}/>

                        <Route path="Admin/ContactUsAdmin" element={<ContactUsAdmin/>}/>
                        <Route path="Admin/InserirDestinos" element={<InserirDestinos/>}/>
                        <Route path="Admin/ListaDestinos" element={<ListaDestinos/>}/>
                        <Route path="Admin/GerirUtilizadores" element={<GerirUtilizadores/>}/>

                        <Route path="Perfil" element={<Perfil/>}/>
                        <Route path="ContactUs" element={<ContactUs/>}/>
                        <Route path="LogOut" element={<LogOut/>}/>
                       
                    </Routes>
                   
                    
                    
                </Router>
            </div>
        )
    }
}