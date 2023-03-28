import { useState } from "react";

export const ListItem = ({ tarefa }) => {
  //Guarda o estado da tarefa (finalziada ou nao)
  const [tarefaFinalizada, setTarefaFinalizada] = useState(true);

  function finalizarTarefa(event) {
    event.preventDefault();
    setTarefaFinalizada(!tarefaFinalizada);
  }

  return (
    <div>
      <button onClick={finalizarTarefa}>Finalizar Tarefa</button>
    </div>
  );
};
