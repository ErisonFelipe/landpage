import React, {Component, useState} from "react";
import './Main.css';
import Logo from './image/logo.jpg';
import Modal from './Modal';
export default class Main extends Component {
    render(){
        return(
            <div className="main">
                <main class="conteudo">
                <section class="conteudo-principal">
            <div class="conteudo-principal-escrito">
                <h1 class="conteudo-principal-escrito-titulo">GS - Tech</h1>
                <h2 class="conteudo-principal-escrito-subtitulo">Manutenção de Celular</h2>
                <Modal></Modal>
            </div>
            <img class="conteudo-principal-img" src={Logo} height="250px" alt="Imagem do Logo"/>
        </section>
        <section class="conteudo-secundario">
            <h3 class="conteudo-secundario-titulo">Como posso te ajudar?</h3>
            <p class="conteudo-secundario-escrito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                quam voluptatem ex fugiat. Culpa
                corrupti voluptate quos voluptates harum, molestiae quisquam deleniti sequi nostrum nam. Magnam velit
                unde esse eum!</p>
            <p class="conteudo-secundario-escrito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eum!
                Architecto exercitationem porro fuga
                esse dolore officia, vel sunt placeat totam temporibus culpa corporis! Doloremque molestiae modi sit a
                id!</p>
            <p class="conteudo-secundario-escrito">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
                quas non cum repudiandae minus
                labore. Ratione porro accusantium numquam saepe sapiente dicta adipisci voluptatem asperiores incidunt
                maxime, magnam labore aut!</p>
        </section>
    </main> 
            </div>
        )
    }
}