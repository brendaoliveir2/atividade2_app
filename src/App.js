import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Components/home'
import Rodape from './Components/rodape'
import Escocia from './Components/Escocia'
import GrandCanyon from './Components/GrandCanyon'
import Muralha from './Components/Muralha'
import Aruba from './Components/Aruba'
import './App.css';


function App() {
  return (

    <Router>
      <Header />
      <Routes>
            <Route path='/' element={ <Header />} />
            <Route path='/Escocia' element={ <Escocia />} />
            <Route path='/GrandCanyon' element={ <GrandCanyon />} />
            <Route path='/Muralha' element={ <Muralha />} />
            <Route path='/Aruba' element={ <Aruba />} />
      </Routes>
      
      <Rodape />
    </Router>

  );
}

export default App;
