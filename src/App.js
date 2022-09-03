import React, { useEffect } from 'react';

import './App.css';
import Header from './features/counter/Header';
import Sidebar from './features/counter/Sidebar';
import Feed from './features/counter/Feed';
import Widget from './features/counter/Widget';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Login } from '@mui/icons-material';
import { login } from './features/userSlice';

import { auth } from './features/counter/firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else {
        dispatch(logout());
      }
    })
  })
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
