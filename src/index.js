import React from 'react';
import ReactDOM from 'react-dom';
import HeaderVariants from './HeaderVariants';
import './styles.css';

function App() {
  return (
    <div className="App">
      <HeaderVariants />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
