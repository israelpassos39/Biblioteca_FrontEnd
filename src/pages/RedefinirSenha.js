// src/pages/RedefinirSenha.js
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

export default function RedefinirSenha() {
  const { token } = useParams();
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(`/auth/redefinir-senha/${token}`, { senha });
    alert('Senha redefinida!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Nova senha" />
      <button type="submit">Redefinir</button>
    </form>
  );
}