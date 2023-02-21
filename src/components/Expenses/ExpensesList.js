import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //Conditional method 3
 

if(props.items.length === 0){
return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
};

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
