import { useState } from "react";
import "./App.css";
import { CardAdicionar } from "./components/CardAdicionar";
import { ListItem } from "./components/ListItem";

function App() {
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    const novaTarefa = {
      id: listaTarefas.length + 1,
      texto: tarefa,
      finalizado: false,
    };

    setListaTarefas([...listaTarefas, novaTarefa]);
  };

  return (
    <div className="App">
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      {listaTarefas.map((tarefa) => (
        <ListItem tarefa={tarefa} removerTarefa={removerTarefa} />
      ))}
    </div>
  );
}

export default App;
