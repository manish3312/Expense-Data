import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //Way=1
    setEnteredTitle(event.target.value);

    //Way=2
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //Way=3
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    //Way=1
    setEnteredAmount(event.target.value);

    //Way=2
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // Way=3
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: event.target.value};
    // });
  };

  const dateChangeHandler = (event) => {
    //Way=1
    setEnteredDate(event.target.value);

    //Way=2
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    //Way=3
    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: event.target.value};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2024-01-01" value={enteredDate} onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Sumbit</button>
       
      </div>
    </form>
  );
};

export default ExpenseForm;
