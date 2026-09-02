import React, { useState, useEffect } from 'react';

function ContadorCurtidas() {
  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    if (curtidas >= 5) {
      console.log("Curtidas em alta!");
    }
  }, [curtidas]);

  const incrementar = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif', color: '#333' }}>
      <h2>Curtidas: {curtidas}</h2>
      
      <button 
        onClick={incrementar}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer',
          borderRadius: '5px',
          border: '1px solid #ccc',
          backgroundColor: '#f0f0f0'
        }}
      >
        Curtir 👍
      </button>

      {curtidas >= 5 && (
        <p style={{ color: '#d97706', fontWeight: 'bold', marginTop: '15px', fontSize: '18px' }}>
          Curtidas em alta! 🔥
        </p>
      )}
    </div>
  );
}

export default ContadorCurtidas;