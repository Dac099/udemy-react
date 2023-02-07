import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpense(newExpense);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  }

  return (
    <form>
      <div className='new-expense-controls'>

        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleHandler}
            value={enteredTitle}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountHandler}
            value={enteredAmount}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2023-01-01'
            onChange={dateHandler}
            value={enteredDate}
          />
        </div>

        <div className='new-expense__actions'>
          <button type='submit' onClick={handleSubmit}>Add Expense</button>
        </div>

      </div>
    </form>
  )
}

export default ExpenseForm;