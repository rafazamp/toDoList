import { useState } from "react";
import "./App.css";
import { CardAdicionar } from "./components/CardAdicionar";
import { ListItem } from "./components/ListItem";

function App() {
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    const novaTarefa = {
      id: listaDeTarefas.length + 1,
      texto: tarefa,
      finalizado: false,
    };

    setListaDeTarefas([...listaDeTarefas, novaTarefa]);
  };

  return (
    <div className="App">
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      {listaDeTarefas.map((tarefa) => (
        <li key={tarefa.id}>{tarefa.texto}</li>
      ))}
    </div>
  );
}

export default App;
