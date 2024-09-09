import { criarUsuario, obterUsuarioPorId } from '../services/usuarioService';

describe('Serviço de Usuário', () => {
  it('deve criar um novo usuário', () => {
    const usuario = criarUsuario('João Silva', 'joao@exemplo.com');
    expect(usuario).toHaveProperty('id');
    expect(usuario.nome).toBe('João Silva');
    expect(usuario.email).toBe('joao@exemplo.com');
  });

  it('deve retornar um usuário pelo ID', () => {
    const usuario = criarUsuario('Maria Souza', 'maria@exemplo.com');
    const usuarioEncontrado = obterUsuarioPorId(usuario.id);
    expect(usuarioEncontrado).toEqual(usuario);
  });
});
