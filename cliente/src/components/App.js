import React from 'react'
import Css from '../css/style.css'

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Nav from './Nav' 
import Admin from './Admin' 
import ContactUs from './ContactUs' 
import Perfil from './Perfil' 
import ContactUsAdmin from './ContactUsAdmin' 
import ListaDestinos from './ListaDestinos' 
import InserirDestinos from './InserirDestinos' 
import GerirUtilizadores from './GerirUtilizadores' 
import Register from './Register' 
import Login from './LogIn' 
import Home from './Home'

import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'

 


function getCookie(cname) {
    const cookies = Object.fromEntries(
      document.cookie.split(/; /).map(c => {
        const [key, v] = c.split('=', 2);
        return [key, decodeURIComponent(v)];
      }),
    );
    return cookies[cname] || '';
  }


export default class App extends React.Component{
        async componentDidMount(){
            
        }
        async  criarGrafico(idDestino, idChart){
            const ctx = document.getElementById(idChart);

            const destinos = await fetch("http://localhost:3001/Destinos/"+idDestino)
            let dataa = await destinos.json()
            console.log(dataa)
            new Chart(
                document.getElementById('myChart'),
                {
                type: 'bar',
                data: {
                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    datasets: [
                    {
                        label: 'Estrelas',
                        data: [
                            dataa.estrela1,
                            dataa.estrela2,
                            dataa.estrela3,
                            dataa.estrela4,
                            dataa.estrela5,
                        ]
                    }
                    ]
                }
                 }
            );
        }
    render(){   
        return (
            
            <div>
                
                <Router>
                    
                    <Nav />
                    <Routes>

                        <Route path="LogIn"  element={<Login/>}/>
                        <Route path="Register"  element={<Register/>}/>
                        <Route element={<ProtectedRoute />}>

                            
                            <Route path="Admin"  element={<Admin/>}/>

                            <Route path="Admin/ContactUsAdmin"  element={<ContactUsAdmin/>}/>
                            <Route path="Admin/InserirDestinos" element={<InserirDestinos/>}/>
                            <Route path="Admin/ListaDestinos" element={<ListaDestinos/>}/>
                            <Route path="Admin/GerirUtilizadores" element={<GerirUtilizadores/>}/>

                            <Route path="" element={<Home/>}></Route>
                            <Route path="Perfil" element={<Perfil/>}/>
                            <Route path="ContactUs"    element={<ContactUs/>}/>

                        </Route>
                        
                       
                    </Routes>
                   
                    
                    
                </Router>
            </div>
        )
    }
    
}

const ProtectedRoute = ({
    redirectPath = '/LogIn',
  }) => {
    let auth = getCookie('Auth')
    if(auth != "true")
        return <Navigate to={redirectPath} replace />;
    
  
    return <Outlet />;
  };