import React, { useEffect, useState } from 'react';
import './utils/styles/reset.css';
import './App.css';
import Header from './components/Header';
import { callAPI } from './api';

const App: React.FC = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestGET = async (): Promise<void> => {
      await callAPI.get('/').then((res) => {
        console.log(res.data);
        setImages(res.data);
      });
    };
    requestGET();
  }, []);

  return (
    <div className="App">
      {console.log(images)}
      <Header />
    </div>
  );
};

export default App;
