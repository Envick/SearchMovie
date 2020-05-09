import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/home/Landing'
import './App.css'
import {Provider} from 'react-redux'

import store from './store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Landing/>
        <Footer/>    
      </div>
    </Provider>
  );
}

export default App;
                                                                                                                                