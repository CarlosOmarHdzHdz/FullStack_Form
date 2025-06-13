import React, { useState } from 'react';
import './App.css'; // Asegúrate de que el archivo CSS exista o créalo

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Usaremos una variable de entorno para la URL del backend en producción
      // Para desarrollo local, puedes usar http://localhost:3000
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
      const res = await fetch(`${backendUrl}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setResponse('Error al enviar el formulario.');
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {response && <p className="response-message">{response}</p>}
    </div>
  );
}

export default App;