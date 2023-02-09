import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [showForm, setShowForm] = useState(false);

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
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate)
    };

    props.onSaveExpense(newExpense);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
    handleShowForm();
  }

  const handleShowForm = () => {
    setShowForm(prevValue => {
      return !prevValue;
    })
  }

  return (
    <form>
      {!showForm && (
        <div className='new-expense__actions new-expense__btn'>
          <button type='submit' onClick={handleShowForm}>Add New Expense</button>
        </div>
      )}

      {showForm && (
        <div className='new-expense__controls'>

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
              min='2020-01-01'
              onChange={dateHandler}
              value={enteredDate}
            />
          </div>

          <div className='new-expense__actions'>
            <button type='button' onClick={handleShowForm}>Cancel</button>
            <button type='submit' onClick={handleSubmit}>Add Expense</button>
          </div>

        </div>
      )}
    </form>
  )
}

export default ExpenseForm;