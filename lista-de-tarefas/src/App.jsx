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
    <div>
      <h1 className='text-6xl'>Lista de Tarefas</h1>
      <input ref={inputAdicionar} type="text" placeholder='Escreva uma tarefa' />
      <button onClick={() => adicionarTarefas()}>Adicionar</button>

      {listaDeTarefas.length > 0 ? (
        <ul>
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
