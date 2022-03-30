import React from 'react';
import './utils/styles/reset.css';
import './utils/styles/common.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import DetailView from './components/DetailView';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';

const App: React.FC = () => {
  const isToggleModal = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <div className="App">
      <Header />
      <Gallery />
      <DetailView />
      {isToggleModal && <Modal />}
    </div>
  );
};

export default App;
