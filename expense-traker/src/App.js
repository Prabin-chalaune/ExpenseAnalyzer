import React, {useState} from 'react'
import styled from "styled-components";
import bg from './Img/bg.png'
import {MainLayout} from './styles/Layouts'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import Settings from './Components/Setting/Settings';


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
    <AppStyled bg={bg} className="App">

      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{

    flex:1;
    &::-webkit-scrollbar{
      width: 0;
    }


  }

  @media only screen and (max-width:500px) and (min-width:310px){

    height:100%;
    overflow-y:auto;
    display:flex;
    flex-direction:column;
    gap:1rem;
    main{
      flex-direction:column;
      width:100%;
      height:auto;
      overflow-y: auto;

    }


  }
`;

export default App;
