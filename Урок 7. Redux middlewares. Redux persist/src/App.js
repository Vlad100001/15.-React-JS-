import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './app/store'; // Импортируем store и persistor
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Загрузка...</div>} persistor={persistor}>
        <div>
          <h1>Список задач</h1>
          <TaskList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
