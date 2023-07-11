import React from "react";
import Home from "./pages/home/Home";
import Person from '@mui/icons-material/Person';
import Profile from "./pages/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
         
        </Route>
        <Route path="/login" element={ <Login/>  }>
        </Route>
        <Route path="/register" element={ <Register/> }  >
         
        </Route>
        <Route path="/profile/:username" element={ <Profile/>  }  >
        
        </Route>
      </Routes>
    </Router>);
  // ); <>
 
  // {/* <Profile/> */}
  // {/* <Login/> */}
  // {/* <Register/> */}
  // </>
}

export default App;
