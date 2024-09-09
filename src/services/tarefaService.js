import Tarefa from '../models/tarefa';
import { v4 as uuidv4 } from 'uuid';

function adicionarTarefaAoUsuario(usuario, titulo) {
  const novaTarefa = new Tarefa(uuidv4(), titulo);
  usuario.tarefas.push(novaTarefa);
  return novaTarefa;
}

function concluirTarefaDoUsuario(usuario, tarefaId) {
  const tarefa = usuario.tarefas.find(tarefa => tarefa.id === tarefaId);
  if (tarefa) {
    tarefa.concluida = true;
  }
  return tarefa;
}

module.exports = {
  adicionarTarefaAoUsuario,
  concluirTarefaDoUsuario
}