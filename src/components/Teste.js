import React from 'react';

function Teste() {
  const teste = process.env.REACT_APP_API_KEY;
  console.log(teste);
  if (teste != null) {
    return <p>API KEY ESTA PRESENTE {teste}</p>;
  }
  return <div> API KEY NOT FOUND</div>;
}

export default Teste;
