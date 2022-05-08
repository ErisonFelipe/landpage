import React, {Component} from "react";
import './Footer.css';
import Logo from './image/logo.png';

export default class Footer extends Component {
    render(){
        return (
            <div className="footer">
                 <footer class="rodape">
                    <img class="rodape-img" src={Logo} alt="Logo" height="100px"/>
                 </footer>
            </div>
        )
    }
}