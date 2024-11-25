import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Управление продуктами</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default App;



