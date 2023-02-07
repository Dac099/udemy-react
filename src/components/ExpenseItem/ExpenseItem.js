import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import {useState} from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      
      <section className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${props.amount}.00</p>
      </section>

      <button onClick={clickHandler}>Update title</button>
    </Card>
  );
}

export default ExpenseItem;