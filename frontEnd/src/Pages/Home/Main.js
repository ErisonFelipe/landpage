import React, {Component} from "react";
import './Main.css';
import Logo from '../image/logo.png';
import Modal from '../../Components/Modal';
import Card from '../../Components/Card';

export default class Main extends Component {
    // const criaCard = ()=>{
    //     document
    // }

    // window.addEventListener("load", criaCard);
    render(){
        return(
            <div className="main">
                <main class="conteudo">
                <section class="conteudo-principal">
            <div class="conteudo-principal-escrito">
                <h1 class="conteudo-principal-escrito-titulo">All Tech</h1>
                <h2 class="conteudo-principal-escrito-subtitulo">Soluções e Manutenção</h2>
                <Modal></Modal>
            </div>
            <img class="conteudo-principal-img" src={Logo} height="250px" alt="Imagem do Logo"/>
        </section>
        <section class="conteudo-secundario">
            <h3 class="conteudo-secundario-titulo">Depoimentos</h3>            
            <Card></Card>            
        </section>
    </main> 
            </div>
        )
    }
}