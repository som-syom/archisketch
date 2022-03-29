import React from 'react';
import './utils/styles/reset.css';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Gallery />
    </div>
  );
};

export default App;
