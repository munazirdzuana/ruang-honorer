import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Cash from "./pages/Cash";
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Singup from './pages/Singup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/profil/:id' element={<Profile/>}></Route>
          <Route path='/singup' element={<Singup/>}></Route>
          <Route path='/duit' element={<Cash/>}></Route>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
