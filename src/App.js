import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { state, useState } from "react";

function App() {
  const DUMMY_EXPENSES = [
    { id: "1", title: "laundary", amount: 10, date: new Date(2023, 3, 22) },
    { id: "2", title: "cooking", amount: 100, date: new Date(2023, 3, 2) },
    { id: "3", title: "playing", amount: 101, date: new Date(2023, 3, 12) },
    { id: "4", title: "eating", amount: 110, date: new Date(2023, 3, 15) },
  ];
  const [expenseItems, setExpenseItems] = useState(DUMMY_EXPENSES);

  function addNewExpenseHandler(addedNewExpense) {
    setExpenseItems((prevExpense) => {
      return [addedNewExpense, ...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense OnAddNewExpense={addNewExpenseHandler}></NewExpense>
      <Card className="expenses">
        <Expenses expenses={expenseItems}></Expenses>
      </Card>
    </div>
  );
}

export default App;
