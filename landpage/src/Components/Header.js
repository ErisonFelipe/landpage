import React, {Component} from  'react';
import './Header.css';
import Logo from './image/logo.jpg';

export default class Header extends Component {
    render(){
        return (
        <div className='header'>
            <header className='cabecalho'>
            <img className='cabecalho-img' src={Logo} alt="Logo" height="60px"/>
                <nav className="cabecalho-menu">
                    <a className='cabecalho-menu-item'>Serviços</a>
                    <a className="cabecalho-menu-item">Produtos</a>
                    <a className="cabecalho-menu-item">Sobre</a>
                </nav>
            </header> 
        </div>
        )
    }
}
