import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem(props){

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <section className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}.00</p>
      </section>
    </Card>
  );
}

export default ExpenseItem;