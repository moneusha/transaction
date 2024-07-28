// src/components/TransactionTable.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TransactionsList.css';

const TransactionTable = ({ transactions }) => {
  const calculateBalance = () => {
    return transactions.reduce((balance, transaction) => {
      return balance + transaction.credit - transaction.debit;
    }, 0);
  };

  const balance = calculateBalance();

  return (
    <div>
      <h1>Transaction Assignment</h1>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Office Transactions</th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.credit}</td>
              <td>{transaction.debit}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2"><strong>Balance:</strong></td>
            <td colSpan="2"><strong>{balance}</strong></td>
          </tr>
        </tbody>
      </table>
      <div className="add-transaction-button">
        <Link to="/add-transaction" className="btn btn-primary">Add Transaction</Link>
      </div>
    </div>
  );
};

export default TransactionTable;
