import React from 'react';

function Teste() {
  const teste = process.env.REACT_APP_API_KEY;

  if (teste) {
    return <p>API KEY ESTA PRESENTE</p>;
  }
  return <div> API KEY NOT FOUND</div>;
}

export default Teste;
