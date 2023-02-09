import "./ExpensesList.css";
import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import Expenses from '../Expenses/Expenses';
import ChartExpenses from '../ChartExpenses/ChartExpenses';


function ExpensesList(props) {
  const [filterYear, setFilterYear] = useState('2023');

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterYear);

  const saveYearSelected = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onSaveYearSelected={saveYearSelected} selected={filterYear} />
      <ChartExpenses expenses={filteredExpenses}/>
      <Expenses items={filteredExpenses}/>
    </Card>
  );
}

export default ExpensesList;