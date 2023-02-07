import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';


function ExpensesList(props) {
  const [filterYear, setFilterYear] = useState('2023');

  const saveYearSelected = (selectedYear) => {
    console.log(selectedYear);
    setFilterYear(selectedYear);
  }


  return (
    <Card className="expenses">
      <ExpensesFilter onSaveYearSelected={saveYearSelected} selected={filterYear}/>
      {props.expenses.map(expense => <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />)}
    </Card>
  );
}

export default ExpensesList;