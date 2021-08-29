import "./App.css";
import Expenses from "./components/Expenses";

function App() {
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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
