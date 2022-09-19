import React from 'react';
import Header from './header';
import './App.css';
import Main from './mainsection';
import Cards from './cards';
import data from './data/data.js';



function App() {

  const allCards = data.map(item => {
    return (
    <Cards
    key={item.id}
    // item={item}
    {...item}
      />
      )
  })
  return (
    <div className="App">
      <Header/>
      <Main/>
      <div className="allcards">
     {allCards}
     </div>
    </div>
  );
}

export default App;
