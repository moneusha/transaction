// src/App.js
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddTransactionPage from './components/AddTransactionPage';
import TransactionTable from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([
    { date: '02/20/2020', description: 'Misc Expenses', credit: 3000, debit: 1215 },
    { date: '02/18/2020', description: 'Printing sheets for office documents', credit: 285, debit: 4215 },
    { date: '02/18/2020', description: 'Snacks Party', credit: 500, debit: 4500 },
    { date: '02/17/2020', description: 'Credited to Office Account', credit: 5000, debit: 0 },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TransactionTable transactions={transactions} />} />
          <Route path="/add-transaction" element={<AddTransactionPage addTransaction={addTransaction} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
