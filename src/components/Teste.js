import React from 'react';

function Teste() {
  console.log(process.env.REACT_APP_API_KEY);
  if (process.env.REACT_APP_API_KEY !== '') {
    return <p>API KEY ESTA PRESENTE {process.env.REACT_APP_API_KEY}</p>;
  }
  return <div> API KEY NOT FOUND</div>;
}

export default Teste;
