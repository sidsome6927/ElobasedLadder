import Home from './pages/home/Home';
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
const App = () => {
  const {user} = useContext(AuthContext)
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={user?<Navigate to ="/"/> :<Login />}/>
      </Routes>
      <Routes>
        <Route path="/register" element={user?<Navigate to ="/"/> :<Register />}/>
      </Routes>
      <Routes>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
