import React, { useState } from 'react';
import './Card.css';

export default function Card(){
   const [nome, setNome] = useState('');
   const [comment, setComment] = useState('');   

    return(
        <>
           <div class="container">
                <div class="card-header">Avaliações</div>
                    <div class="card-body">
                    <h5 className="card-title">{nome}</h5>                        
                        <p className="card-text">"{comment}"</p>
                    </div>
            </div>
            <div class="comentarios">
                <h4 class="titulo-comentario">Deixe seu comentário</h4>
                
                <div class="box-comment">
                <input type="text" class="inputComment" name="nome" value={nome} onChange={(e)=> {setNome(e.target.value)}}></input> 
                <label for="nome" className="labelComment">Nome:</label>
                </div>
                <br></br>
                <div class="box-comment">
                <input type="text" class="inputComment" id="texto" name="comment" value={comment} onChange={(e)=> {setComment(e.target.value)}}></input>
                <label for="comment" className="labelComment" id="texto2">Comentário:</label>
                </div>
                <br></br>
                <button class="btn-comment">Enviar</button>
                
            </div>                           
        </>
    )
}

