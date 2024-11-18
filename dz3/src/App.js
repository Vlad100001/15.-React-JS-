import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './Component/dz3-1';
import TodoList from './Component/dz3-2';



function App() {
  const name = "Alex"
  return (
    <div className='App'>
       <h1>Температурный конвертер</h1>
      <TemperatureConverter />

      <h1>Список дел</h1>
      <TodoList />
    </div>


  );
}

export default App;

