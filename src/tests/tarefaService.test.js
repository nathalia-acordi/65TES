import { criarUsuario } from '../services/usuarioService';
import { adicionarTarefaAoUsuario, concluirTarefaDoUsuario } from '../services/tarefaService';

describe('Serviço de Tarefa', () => {
  it('deve adicionar uma tarefa a um usuário', () => {
    const usuario = criarUsuario('João Silva', 'joao@exemplo.com');
    const tarefa = adicionarTarefaAoUsuario(usuario, 'Aprender Jest');
    expect(tarefa).toHaveProperty('id');
    expect(tarefa.titulo).toBe('Aprender Jest');
    expect(usuario.tarefas).toHaveLength(1);
  });

  it('deve marcar uma tarefa como concluída', () => {
    const usuario = criarUsuario('João Silva', 'joao@exemplo.com');
    const tarefa = adicionarTarefaAoUsuario(usuario, 'Aprender Jest');
    const tarefaConcluida = concluirTarefaDoUsuario(usuario, tarefa.id);
    expect(tarefaConcluida.concluida).toBe(true);
  });
});
