import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "componentes/CampoTexto/";
import ListaSuspensa from "componentes/ListaSuspensa";
import Botao from "componentes/Botao/index.js";


export const Formulario = (props) => {

    // Declara estados iniciais dos elementos que possui
    // use.... é sempre um hook
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        // Passa o objeto para App.js
        props.cadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })

        // Após envio das informações, o formulário é 'zerado'
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    // Valor será igual ao seu estado inicial
                    valor={nome}
                    // Extrai do componente a seguinte ordem de funções:
                    // onChange={aoDigitar} -> aoDigitar = aoAlterar
                    aoAlterar={valor => setNome(valor)} // Essa função atribui o novo valor ao nome
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}