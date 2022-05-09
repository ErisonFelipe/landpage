import React, {Component} from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import './Footer.css';
import Logo from './image/logo.png';

export default class Footer extends Component {
    render(){
        return (
            <div className="footer">
                 <footer class="rodape">
                     <div class="img-logo">
                        <img class="rodape-img" src={Logo} alt="Logo" height="100px"/>
                     </div>
                     <div class="icon">
                        <div class="insta">
                            <p><FaInstagram/> Siga</p>
                        </div>
                        <div class="whats">
                            <p><FaWhatsapp/> Acompanhe</p>
                        </div>                        
                    </div>
                    <div class="created">
                        <p>Creado por: <a href="">Erison Felipe</a></p>
                        
                    </div>                    
                 </footer>
            </div>
        )
    }
}