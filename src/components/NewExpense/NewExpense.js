import React from 'react';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = (props) =>  {

  const saveExpenseHandler = expenseData => {
    const newExpense = {
      ...expenseData,
      id: Math.floor(Math.random() * 1000)
    }

    props.onHandleSave(newExpense);
  }


  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
  )
}

export default NewExpense;