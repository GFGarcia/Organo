import React from 'react';
import Colaborador from '../Colaborador';
import './Time.css';


const Time = (props) => {
    return (
        // Renderização condicional do React
        // Somente irá renderizar o time se houver colaboradores naquele time
        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3>{props.nome}</h3>
            <div className='border-bottom' style={{ backgroundColor: props.corPrimaria }}></div>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} imagem={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo} corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
    )
}

export default Time;