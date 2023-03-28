import { useState } from "react";

export const CardAdicionar = () => {
  const [tarefa, setTarefa] = useState("")

  const adicionarTarefa = (event) => {
    event.preventDefault();
    if (tarefa == "") {
      alert("Digite uma tarefa válida");
    } else {
      alert(tarefa);
      setTarefa("");//Limpa o campo de input
      //Adicionar tarefa no array
    }
  };

  return (
    <div>
      <input
        type="text"
        value={tarefa}
        onChange={(event) => setTarefa(event.target.value)}
        placeholder="Digite o nome da tarefa..."
      />

      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
    </div>
  );
}