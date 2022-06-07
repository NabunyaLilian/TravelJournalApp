import React from 'react';
import Card from "./components/Card"
import Navbar  from "./components/Navbar";
import data from "./data"


function App() {
  let i = 1;
  const items = data.map( item =>
    {
      return(
        <Card 
          key={i++}
          item={item}
        />
      )
    }
  )
  return (
    <div>
      <Navbar />
      {items}
    </div>
  );
}

export default App;
