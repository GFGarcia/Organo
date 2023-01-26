import React, { useState } from "react";
import { Banner } from "componentes/Banner";
import { Formulario } from "componentes/Formulario";
import Time from "componentes/Time";
import Rodape from "componentes/Rodape";

function App() {

	const times = [
		{
			nome: 'Programação',
			corPrimaria: '#57C278',
			corSecundaria: '#D9F7E9'
		},
		{
			nome: 'Front-End',
			corPrimaria: '#82CFFA',
			corSecundaria: '#E8F8FF'
		},
		{
			nome: 'Data Science',
			corPrimaria: '#A6D157',
			corSecundaria: '#F0F8E2'
		},
		{
			nome: 'DevOps',
			corPrimaria: '#E06B69',
			corSecundaria: '#FDE7E8'
		},
		{
			nome: 'UX e Design',
			corPrimaria: '#DB6EBF',
			corSecundaria: '#FAE9F5'
		},
		{
			nome: 'Mobile',
			corPrimaria: '#FFBA05',
			corSecundaria: '#FFF5D9'
		},
		{
			nome: 'Inovação e Gestão',
			corPrimaria: '#FF8A29',
			corSecundaria: '#FFEEDF'
		}
	];

	const [colaboradores, setColaboradores] = useState([]);

	const adicionarColaborador = (colaborador) => {
		// Sintaxe mais comum.
		// "Espalha os antigos colaboradores e adiciona o novo no final"
		setColaboradores([...colaboradores, colaborador]);
	}

	return (
		<div className="App">
			<Banner />
			<Formulario
				// @ts-ignore    colaborador = Objeto props.cadastrarColaborador definido em aoSalvar no componente Formulário
				times={times.map(time => time.nome)}
				cadastrarColaborador={colaborador => adicionarColaborador(colaborador)} />
			{times.map(time =>
				<Time
					key={time.nome}
					nome={time.nome}
					corPrimaria={time.corPrimaria}
					corSecundaria={time.corSecundaria}
					colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
				/>)}
			<Rodape />
		</div>
	);
}

export default App;
