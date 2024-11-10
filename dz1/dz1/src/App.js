import logo from './logo.svg';
import './App.css';
import Message from './component/Message';


function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Сообщения</h1>
      <Message text="Привет! Это ваше первое сообщение." />
      <Message text="Успехов в изучении React!" />
      <Message text="Не забывайте практиковаться!" />
    </div>
  );
}

export default App;
