import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectHandler = (e) => {
    props.onSelectedFilteredYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">Filter By Year</label>
        <select
          name="year"
          id="year"
          value={props.selectedYear}
          onChange={selectHandler}
        >
          <option value="all">ALL</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>

        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
