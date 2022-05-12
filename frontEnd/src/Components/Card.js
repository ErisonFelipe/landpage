import React from 'react';
import './Card.css';

export default function Card(){    

    return(
        <>
            <div class="container">
                <div class="card-header">Avaliações</div>
                    <div class="card-body">
                        <h5 class="card-title">Nome</h5>
                        <p class="card-text">"Depoimento do cliente"</p>
                    </div>
            </div>            
        </>
    )
}