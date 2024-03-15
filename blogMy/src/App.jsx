
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js';
import {login, logout} from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
// whenever requesting to database loading state
const [loading, setLoading] = useState(true);

const dispatch = useDispatch()

// whenever app is loading - use useEffect and ask weather logged in or not

useEffect(() =>{
  // asking who is user
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    } else {
      dispatch(logout())
    }
  })  //.then takes data
  .finally(()=> setLoading(false))
}, [])
  return  !loading ? (
    <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          TODO{/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
