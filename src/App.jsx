import { useState } from "react";
import "./App.css";
import { CardAdicionar } from "./components/CardAdicionar";

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
      <CardAdicionar />
    </div>
  );
}

export default App;
