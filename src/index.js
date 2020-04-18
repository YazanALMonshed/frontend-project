import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Layout = () => {

  return (
    <main>
      <h1> main Layout here </h1>
    </main>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

