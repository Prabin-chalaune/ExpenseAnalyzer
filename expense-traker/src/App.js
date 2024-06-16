import React, {useState} from 'react'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import Settings from './Components/Setting/Settings';
import './App.css'


function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Income />
      case 3:
        return <Expenses />
      case 4:
        return <Settings/>
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="App AppStyled">

      <div className='MainLayout'>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </div>
    </div>
  );
}


export default App;
