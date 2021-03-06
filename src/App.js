import React from 'react';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
// import Main from './Main'
import AppRouter from './AppRouter/AppRouter';

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
