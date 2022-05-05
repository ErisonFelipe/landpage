import React, {useState} from "react";
import './Modal.css';

export default function Modal(){
    const [isModalVisible, setIsModalVisible] = useState(false);

    // document.getElementsById("close").addEventListener("click", Fechar);

    // function Fechar(){
    //     let modal = document.getElementsByClassName('modal-fade');

    //     modal.style.display = 'none';
    // };

    return(
        <>
             <button type="button" class="conteudo-principal-escrito-botao" data-bs-toggle="modal"
            data-bs-target="#exampleModal" onClick={()=>setIsModalVisible(true)}>Orçamento</button>
            {isModalVisible ?     <div class="modal-fade" id="exampleModal" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Orçamento</h5>

                    <button type="button" class="btn-close" id="close" onClick={()=>setIsModalVisible(false)}>Fechar</button>
                </div>
                <form>
                    <div class="modal-body">
                        <p id="subtitulo">Solicite o seu!</p>

                        <fieldset class="grupo">
                            <div>
                                <label for="nome">Nome completo:</label>
                                <input type="text" name="nome" id="nome" required/>
                            </div>
                            <div>
                                <label for="celular">Celular:</label>
                                <input type="tel" name="celular" id="celular" placeholder="11 99999-9999" required/>
                            </div>
                            <div>
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="email"/>
                            </div>
                            <div>
                                <label for="endereco">Endereço:</label>
                                <input type="text" name="endereco" id="endereco" placeholder="nome da rua" required/>
                            </div>
                        </fieldset>
                        <fieldset class="grupo">
                            <div>
                                <label>Marca do celular:</label>
                                <select id="marca" name="marca">
                                    <option value="" selected disabled>escolha...</option>
                                    <option value="samsung">Samsung</option>
                                    <option value="motorola">Motorola</option>
                                    <option value="lg">LG</option>
                                    <option value="xiaomi">Xioami</option>
                                    <option value="iphone">Iphone</option>
                                    <option value="nokia">Nokia</option>
                                    <option value="outro">Outro</option>
                                </select>
                                <input type="text" name="qual" id="qual" placeholder="Qual?"/>
                            </div>
                            <div>
                                <label for="modelo">Modelo do celular:</label>
                                <input type="text" name="modelo" id="modelo" placeholder="digite o modelo do celular"/>
                            </div>
                            <div>
                                <label for="msg">Descreva o problema do celular:</label>
                                <textarea id="msg" name="msg" rows="4" cols="50"></textarea><br/>
                                <button type="reset" class="btn btn-secondary">Apagar</button>
                            </div>
                        </fieldset>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Solicitar orçamento</button>
                    </div>
                </form>
            </div>
        </div>
    </div> : null}
        </>
    )
}