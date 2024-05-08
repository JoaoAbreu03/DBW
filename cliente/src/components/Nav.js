import React from 'react'
import {Link} from 'react-router-dom'
export  default class Nav extends React.Component{

    

    render(){
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light rounded nbar">
                    <Link to="./">
                        <a class="nav-link" href="#" >

                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"/></svg>

                        </a>
                    </Link>
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <span class="h3" > Madeira Destinos </span>
                    </li>
                    </ul>
                    <div class="form-inline my-1 my-sm-0">
                        <div class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/imagens/perfil_teste.png" alt="imagem perfil" width="50" height="50"/>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                               <ul>
                                <Link to="/Perfil">
                                    <a  class="dropdown-item" > Perfil </a>
                                </Link>
                                <Link to="/ContactUs">
                                    <a  class="dropdown-item" > Contact US </a>
                                </Link>
                                <Link to="/Admin">
                                    <a  class="dropdown-item" > Admin </a>
                                </Link>
                                <div class="dropdown-divider"></div>

                                <Link to="/LogOut">
                                    <a  class="dropdown-item" > LogOut </a>
                                </Link>
                               
                                </ul>
                            </div>
                        </div>
                    </div>
                
                </nav>
          </div>
        )
    }
}