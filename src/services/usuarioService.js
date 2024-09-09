import Usuario from '../models/usuario';
import { v4 as uuidv4 } from 'uuid';
const usuarios = [];

function criarUsuario(nome, email) {
  const novoUsuario = new Usuario(uuidv4(), nome, email);
  usuarios.push(novoUsuario);
  return novoUsuario;
}

function obterUsuarioPorId(id) {
  return usuarios.find(usuario => usuario.id === id);
}

module.exports = {
      criarUsuario,
      obterUsuarioPorId
}
