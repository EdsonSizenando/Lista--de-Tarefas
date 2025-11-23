import { useState, useRef } from 'react';
import ItensTarefas from './itensTarefas';




function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);

  const inputAdicionar = useRef();


  const adicionarTarefas = () => {
    const novaLista = [...listaDeTarefas];
    const valorInput = inputAdicionar.current.value;

    if (valorInput !== "") {
      novaLista.push(valorInput);
      setListaDeTarefas(novaLista);

      inputAdicionar.current.value = ""
    }

  };


  return (
    <div className=' text-blue-950 flex w-full max-w-96 flex-col items-center gap-4'>
      <h1 className='font-bold text-4xl  '>Lista de Tarefas</h1>
      
      <div className='flex w-full gap-2'>
        <input className='w-full border border-gray-600 rounded-md px-2' ref={inputAdicionar} type="text" placeholder='Escreva uma tarefa' />
        <button className='rounded-md bg-gray-800 text-white transition px-2 cursor-pointer hover:bg-gray-600' onClick={() => adicionarTarefas()}>Adicionar</button>
      </div>

      {listaDeTarefas.length > 0 ? (
        <ul className='w-full flex flex-col gap-2'>
          {listaDeTarefas.map((itens, index) => (
            <ItensTarefas
              key={index}
              itens={itens}
              listaDeTarefas={listaDeTarefas}
              setListaDeTarefas={setListaDeTarefas} />
          ))}

        </ul>

      ) : (
        <p>Você não tem tarefas a realizar!</p>
      )}


    </div>
  );


}





export default App;
