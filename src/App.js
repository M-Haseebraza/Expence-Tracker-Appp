import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Balance from './components/Balance/balance'
import BlncHistory from './components/blncHistory/blncHistory'
import History from './components/History/history'
import Transaction from './components/Transaction/transaction'


function App() {
  return (
    <div className="App">
     <Header/>
     <Balance/>
     <BlncHistory/>
     <History/>
     <Transaction></Transaction>
    </div>
  );
}

export default App;
