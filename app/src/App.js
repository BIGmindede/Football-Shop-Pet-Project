import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import CurrentGood from './pages/CurrentGood/CurrentGood';
import Categories from './pages/Categories/Categories';

function App() {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem("cart", JSON.stringify([]))
  }
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<Categories/>}/>
        <Route path='/goods' element={<MainPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/good' element={<CurrentGood/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
