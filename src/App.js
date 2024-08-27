import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/> }/>
     </Routes>
    </div>
  );
}

export default App;
