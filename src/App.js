import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }


  const expenses = [
    {
      id: "e1",
      title: "Samsung TV",
      amount: 200,
      date: new Date(2021, 8, 11),
    },
    {
      id: "e2",
      title: "TATA Car",
      amount: 7000,
      date: new Date(2021, 8, 12),
    },
  ];

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
