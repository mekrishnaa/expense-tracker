import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //                                             enteredTitle:'',
  //                                             enteredAmount:'',
  //                                             enteredDate:''
  //                                         });

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);

    // setUserInput({
    //               ...userInput,
    //               enteredTitle:e.target.value
    //             });

    // A more preferred way to update the state :

    // setUserInput((prevState)=>{
    //   return { ...prevState, enteredTitle:e.target.value}
    // })
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);

    // setUserInput({
    //     ...userInput,
    //   enteredAmount:e.target.value
    // });
    // A more preferred way to change state :

    // setUserInput((prevState)=>{return {...prevState, enteredAmount : e.target.value}});
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);

    // setUserInput({
    //     ...userInput,
    //   enteredDate:e.target.value
    // });

    // A more preferred way to change state :

    // setUserInput((prevState)=> {return {...prevState,enteredDate:e.target.value}});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(userInput);
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={enteredTitle}
            placeholder="Enter Expense Title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            value={enteredAmount}
            min={0.01}
            step={0.01}
            placeholder="Enter Exepnse Amount"
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={enteredDate}
            min="2019-01-01"
            max={new Date().toISOString().split("T")[0]}
            onChange={handleDateChange}
          />
        </div>
      </div>
      
     
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
