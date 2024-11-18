import logo from './logo.svg';
import './App.css';
import Greeting from './Component/Greeting';
import Counter from './Component/Counter';
// import MessagesList from './Component/MessagesList';
// import { messages } from './messages'; // Импортируем массив сообщений
import TemperatureConverter from './Component/dz3-1';
import TodoList from './Component/dz3-2';



function App() {
  const name = "Alex"
  return (
    <div className='App'>
      {/* <h1> Leant react</h1> */}
      {/* <Greeting name={name} />
      <Counter /> */}
      {/* <MessagesList messages={messages} /> */}
      <h1>Температурный конвертер</h1>
      <TemperatureConverter />

      <h1>Список дел</h1>
      <TodoList />
    </div>


  );
}


export default App;

