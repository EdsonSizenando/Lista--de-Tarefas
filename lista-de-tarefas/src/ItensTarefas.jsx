import React from 'react';

const ItensTarefas = ({ itens, listaDeTarefas, setListaDeTarefas}) => {

    const removerTarefas = () => {
        const novaLista = [...listaDeTarefas]

        const listaFiltrada = novaLista.filter(
            (listaCheia) => listaCheia != itens
            
        );

        setListaDeTarefas(listaFiltrada);

    }



    return (
        <li>
            <p>{itens}</p>
            <button onClick={() => removerTarefas()}>Remover</button>
        </li>
    )
};

export default ItensTarefas;