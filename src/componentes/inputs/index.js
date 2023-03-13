import React from 'react';
import InputMask from "react-input-mask"; 
import './style.css'

function Input(props) {

    function aoDigitado(evento) {
       props.aoAlterado(evento.target.value);

    }

    return (
        <div className='inputs'>
            <label className='title-input'>{props.label}</label>
            <InputMask mask={props.mask} type={props.type} valor={props.valor} id="input" onChange={aoDigitado} placeholder={props.placeholder} required></InputMask>
        </div>
    );
}

export default Input;
