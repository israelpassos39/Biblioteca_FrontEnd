import { useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }
    try {
      await api.post('/auth/register', { nome, email, senha });
      setSucesso('Conta criada com sucesso!');
      setErro('');
    } catch (err) {
      setErro('Erro ao criar conta. Email já cadastrado?');
      setSucesso('');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-3">Criar Conta</h3>

        {erro && <div className="alert alert-danger">{erro}</div>}
        {sucesso && <div className="alert alert-success">{sucesso}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              className="form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Crie uma senha"
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Criar Conta</button>
        </form>

        <div className="mt-3 text-center">
          Já tem conta? <Link to="/" className="text-decoration-none">Entrar</Link>
        </div>
      </div>
    </div>
  );
}
