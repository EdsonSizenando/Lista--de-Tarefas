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
        <li className='flex justify-between gap-2'>
            <p>{itens}</p>
            <button className='rounded-md bg-red-800 text-white transition px-2 cursor-pointer hover:bg-gray-600' onClick={() => removerTarefas()}>Remover</button>
        </li>
    )
};

export default ItensTarefas;