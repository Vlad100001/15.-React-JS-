// import logo from './logo.svg';
// import './App.css';
// import Box from './Components/lesson4/ex1-Box';
// import List from './Components/lesson4/ex2-List';
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ListPage from './Components/lesson4/ex4-ListPage';
// import DetailPage from './Components/lesson4/ex4-DetailPage';
// import { Route, Routes, } from "react-router-dom";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ListPage />} />
//         <Route path="/detail/:id" element={<DetailPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// function App() {

//   const liElements = [1, 2, 3, 4, 5, 6, 7]
//   const renderItem = (item, index) => {
//     const style = { color: index % 2 === 0 ? 'blue' : 'red' };
//     return (
//       <div style={style}>
//         {item} - Уникальный стиль
//       </div>
//     );
//   };

//   return (
//     <div className="App">
//       <h1>Изучаем React!</h1>
//       <List listItems={liElements} renderItem={renderItem} />
//       <App />

//     </div>
//   );
// }



// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/dz4/HomePage';
import AboutPage from './Components/dz4/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

