import './App.css';
import Header from './components/Header/Header'
import Balance from './components/Balance/balance'
import BlncHistory from './components/blncHistory/blncHistory'
import History from './components/History/history'
import Transaction from './components/Transaction/transaction'
import inputAmount from './contextApi.js'
import { useState } from 'react';
function App() {
  let listData=useState([])
  return (
    <div className="App">
      <inputAmount.Provider value={listData}>
     <Header/>
     <Balance/>
     <BlncHistory/>
     <History/>
     <Transaction></Transaction>
     </inputAmount.Provider>
    </div>
  );
}

export default App;
