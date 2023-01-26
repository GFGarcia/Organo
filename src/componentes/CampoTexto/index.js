import React from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {

    // let valor = '';

    // Função que manda de volta para o Formulário o valor recebido no campo
    const aoDigitar = (evento) => {
        // evento.target.value -> Pega o valor que está sendo digitado e joga de volta para a função aoAlterar determinada no compo
        // evento.target.value = valor (Ver Formulário)
        props.aoAlterar(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;