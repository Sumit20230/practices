
import { useState } from 'react';
import './App.css';
import Item from './Components/item';
import ItemDate from './Components/itemdate'
function App() {
 
  const [c,setstate]=useState(0);

  function inc()
  {
      setstate(c+1);
  }
  function dec()
  {
   setstate(c-1);
  }
  function sol()
  {
    setstate(0)
  }
  return (
  
   <div>
    <div className='temp'> Increment & decrement</div>
    <div className='gem'>
      <div className='p'><button onClick={inc}>+</button></div>
      <div className='r'>{c}</div>
      <div className='m'><button onClick={dec}>-</button></div>
    </div>
    <div>
      <button onClick={sol}> reset</button>
    </div>
   </div>
  );
}

export default App;
