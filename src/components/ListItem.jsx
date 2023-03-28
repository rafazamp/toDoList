import { useState } from "react";

export const ListItem = ({ finalizarTarefa, removerTarefa }) => {
  //Guarda o estado da tarefa (finalziada ou nao)
  const [tarefaFinalizada, setTarefaFinalizada] = useState(true);

  function finalizarTarefa(event) {
    event.preventDefault();
    setTarefaFinalizada(!tarefaFinalizada);
  }

  function removerTarefa(event) {
    event.preventDefault;
    removerTarefa(tarefa);
  }

  return (
    <div>
      <button onClick={finalizarTarefa}>Finalizar Tarefa</button>
      <button onClick={removerTarefa}>Remover Tarefa</button>
    </div>
  );
};
