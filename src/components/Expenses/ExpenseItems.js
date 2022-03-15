import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseItems.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseItems = (props) => {
  const [selectedYear, setSelectedYear] = useState("all");

  const filteredData = props.expanses.filter((expanse) => {
    return selectedYear === "all"
      ? true
      : expanse.date.getFullYear().toString() === selectedYear;
  });

  const selectedExpenseYearHandler = (year) => {
    setSelectedYear(year);
  };



  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectedFilteredYear={selectedExpenseYearHandler}
        selectedYear={selectedYear}
      />
      <ExpensesChart expenses={filteredData}/>
      <ExpensesList expenses={filteredData} />
      
    </Card>
  );
};

export default ExpenseItems;
