import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.expenseItem.title);

  // function clickHandler() {
  //   setTitle("clicked");
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseItem.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.expenseItem.title}</h2>
        <div className="expense-item__price">${props.expenseItem.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}
export default ExpenseItem;
