import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './features/Feed';
import { auth } from './firebase';// 
import Login from './Login';
import Header from './features/Header';
import Sidebar from './features/Sidebar';
import Widget from './features/Widget';
// import { Login } from '@mui/icons-material';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
        );
      }
      else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) :
        (<div className='app_body'>
          <Sidebar />

          <Feed />
          <Widget />
        </div>)}
    </div>

  );
}

export default App;
