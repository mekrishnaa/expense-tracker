import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expanse.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expanse.date} />
        <div className="expense-item__description">
          {/* <h2>{props?.expanse?.title}</h2> */}
          <h2>{title}</h2>
          <div className="expense-item__price">
            {props?.expanse?.amount} Rupees
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
