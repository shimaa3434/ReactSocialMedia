import './App.css';
import Login from '../src/pages/login/Login'
import Register from './pages/register/Register';
import {createBrowserRouter, RouterProvider, Router, Route, Outlet, Navigate} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from "./pages/home/Home"
import Profile from './pages/profile/Profile'
import { useEffect, useState } from 'react';



function App() {
  
  const currentUser = true
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || true)
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}

useEffect(() => {
  localStorage.setItem("darkMode", darkMode);
}, [darkMode]);

  const Layout = ()=>{
    return(

 <div className={`${darkMode ?  "theme-light" : 'theme-dark'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <div style={{display:'flex',}}>
        <LeftBar />
        <div style={{flex: 6}}>
        <Outlet />
        </div>
        
        <RightBar />
        </div>
        
      </div>
     
    )
  }
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to= "/login"/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: "/",
      element: (
      <ProtectedRoute>
        <Layout />
        </ProtectedRoute>
        ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
    ] 
    }
  
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
    
  );
}

export default App;
