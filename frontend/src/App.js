import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
   <div className="container">
      <img src={logo} alt="logo" className="logo"/>

      <div className="content">
        <p>
          Ofereça <strong> spots </strong> para programadores e contre <strong> talentos</strong>
        </p>

        <form>
          <label htmlFor="email"> E-mail *</label>
          <input  type="email" 
                  id="email" 
                  placeholder="Seu e-mail"
          />

          <button type="button" className="btn">Entrar</button>

        </form>

      </div>
   </div>
  );
}

export default App;
