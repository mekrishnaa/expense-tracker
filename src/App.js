import logo from "./logo.svg";
import {useState} from 'react';
import "./App.css";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPANSES = [
  { id: 1, title: "Car Insurence", amount: 500, date: new Date(2022, 1, 10) },
  {
    id: 2,
    title: "Life Insurence",
    amount: 5000,
    date: new Date(2021, 4, 5),
  },
  {
    id: 3,
    title: "Medical Insurence",
    amount: 600,
    date: new Date(2022, 2, 2),
  },
  {
    id: 4,
    title: "Bank Deposite",
    amount: 20000,
    date: new Date(2021, 7, 1),
  },
  {
    id: 5,
    title: "Mobile Phone",
    amount: 12000,
    date: new Date(2021, 1, 11),
  },
];
function App() {
  const [expanses, setExpanses] = useState(DUMMY_EXPANSES)

  const addExpenseHandler = (expenseData) => {
    // expanses.push(expenseData);
    setExpanses((prevExpanses)=>{
      return [ expenseData, ...prevExpanses ];
    });
  };

  return (
    <div className="App">
      <NewExpense
        noOfExpenseItem={expanses.length}
        addExpenses={addExpenseHandler}
      />
      <ExpenseItems expanses={expanses} />
    </div>
  );
}

export default App;
