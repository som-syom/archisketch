import React from 'react';
import './utils/styles/reset.css';
import './utils/styles/common.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import DetailView from './components/DetailView';
import store from './store';
import { Provider, useSelector } from 'react-redux';
import { DetailViewState } from './store/reducers/detailView';

const App: React.FC = () => {
  // const isOpen = useSelector((state: DetailViewState) => state.isOpen);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Gallery />
        {/* {isOpen && <DetailView />} */}
        <DetailView />
      </div>
    </Provider>
  );
};

export default App;
