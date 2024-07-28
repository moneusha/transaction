import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTransactionPage.css';

const AddTransactionPage = ({ addTransaction }) => {
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState('Credit');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (amount === '' || description === '') {
      alert('Amount and Description are required.');
      return;
    }
    const transaction = {
      date: new Date().toISOString().split('T')[0],
      description,
      credit: transactionType === 'Credit' ? parseFloat(amount) : 0,
      debit: transactionType === 'Debit' ? parseFloat(amount) : 0,
    };
    addTransaction(transaction);
    navigate('/');
  };

  return (
    <div className="add-transaction-form">
      <h1>New Transaction</h1>
      <div className="form-group">
        <label htmlFor="transactionType">Transaction Type:</label>
        <select
          id="transactionType"
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <button className="btn save-btn" onClick={handleSave}>Save</button>
        <button className="btn cancel-btn" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </div>
  );
};

export default AddTransactionPage;
