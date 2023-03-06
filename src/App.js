import Expenses from "./Components/Expenses/Expenses";


const App = () => {
   const expenses = [
    { id: "e1", title: "Milk", amount: 200, date: new Date(2023, 2, 28) },
    { id: "e2", title: "Tea", amount: 500, date: new Date(2023, 2, 28) },
    { id: "e3", title: "Sugar", amount: 100, date: new Date(2023, 2, 28) },
    { id: "e4", title: "Water", amount: 200, date: new Date(2023, 2, 28) },
  ];
  return (
    <div>
      <h1>Let's get started</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
