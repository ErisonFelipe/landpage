import React, {useState} from "react";
import './Modal.css';

export default function Modal(){
    const [isModalVisible, setIsModalVisible] = useState(false);    

    return(
        <>
             <button type="button" class="conteudo-principal-escrito-botao" data-bs-toggle="modal"
            data-bs-target="#exampleModal" onClick={()=>setIsModalVisible(true)}>Orçamento</button>
            {isModalVisible ?     <div class="box" id="exampleModal" >
            <form >
                <fieldset>
                    <legend><b>Solicitar Orçamento</b></legend>
                    <br></br>
                    <div class="inputBox">
                        <input type="text" class="inputUser" name="nome" id="nome" required/>
                        <label for="nome" class="labelInput" >Nome completo:</label>                                
                    </div>
                    <br></br>
                    <div class="inputBox">                                
                        <input type="tel" class="inputUser" name="celular" id="celular" required/>
                        <label for="celular" class="labelInput" >Celular:</label>
                    </div>
                    <br></br>
                    <div class="inputBox">                                
                        <input type="email" class="inputUser" name="email" id="email" required/>
                        <label for="email" class="labelInput" >Email:</label>
                    </div>
                    <br></br>                   
                    <div class="inputBox">                               
                        <input type="text" class="inputUser" name="endereco" id="endereco" required/>
                        <label for="endereco" class="labelInput" >Endereço:</label>
                    </div>
                    <br></br>
                    <p>Marca do celular:</p>
                    <div class="input-radio">
                        <input type="radio" id="sansung" value="samsung" name="marca" required/>
                            <label for="sansung">Sansung</label>                                                                            
                        <input type="radio" id="iphone" value="iphone" name="marca" required/>
                            <label for="iphone">Iphone</label>
                        <input type="radio" id="motorola" value="motorola" name="marca" required/>
                            <label for="motorola">Motorola</label>
                        <input type="radio" id="xioami" value="xioami" name="marca" required/>
                            <label for="xioami">Xioami</label>
                        <input type="radio" id="nokia" value="nokia" name="marca" required/>
                            <label for="nokia">Nokia</label>
                        <input type="radio" id="lg" value="lg" name="marca" required/>
                            <label for="lg">LG</label>
                </div>
                <br></br>
                    <div className="inputBox">
                        <textarea id="msg" class="inputUser" name="msg" rows="4" cols="50" required></textarea>
                        <label for="msg" class="labelInput" >Descreva o problema do celular e modelo:</label><br></br>
                    </div>
                    <div class="btn">
                        <button type="button" class="btn-close" id="close" onClick={()=>setIsModalVisible(false)}><b>Fechar</b></button>
                        <button type="submit" class="btn-primary"><b>Solicitar</b></button>
                        </div>                
                </fieldset>
            </form>
    </div> : null}
        </>
    )
}