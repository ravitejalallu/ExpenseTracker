import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { state, useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const expenseItems = props.expenses;
  console.log(expenseItems[0].date.getFullYear());

  const [filteredYear, setFilteredYear] = useState("2023");

  function selectedYearFilterHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpenseFilter
        selected={filteredYear}
        onSelectedYear={selectedYearFilterHandler}
      ></ExpenseFilter>
      {filteredExpenses.length === 0 ? (
        <h2 className="no-expenses">No Items</h2>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expenseItem={expense}></ExpenseItem>
        ))
      )}
    </div>
  );
}

export default Expenses;
