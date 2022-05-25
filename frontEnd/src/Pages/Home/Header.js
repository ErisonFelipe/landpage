import React, {Component} from  'react';
import { FaTools, FaCartPlus, FaInfo } from "react-icons/fa";
import './Header.css';
import Logo from '../image/logo.png';

export default class Header extends Component {
    render(){
        return (
        <div className='header'>
            <header className='cabecalho'>
            <div className="cabecalho-main">
            <img className='cabecalho-img' src={Logo} alt="Logo" height="60px"/>
            </div>              
            </header>
            <nav className="cabecalho-menu">
                    <a className='cabecalho-menu-item'><FaTools alt="Serviços"/> Serviços</a>
                    <a className="cabecalho-menu-item"><FaCartPlus/> Produtos</a>
                    <a className="cabecalho-menu-item"><FaInfo/> Sobre</a>
                </nav> 
        </div>
        )
    }
}
