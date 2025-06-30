// src/pages/EsqueciSenha.js
import { useState } from 'react';
import api from '../api';

export default function EsqueciSenha() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/auth/esqueci-senha', { email });
    alert('Email de redefinição enviado!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Enviar</button>
    </form>
  );
}
