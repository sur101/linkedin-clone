import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login(
                    {
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profileUrl: userAuth.user.photoURL
                    }
                ))
            }).catch(error => alert(error));

    };
    const register = () => {
        if (!name) {
            return alert("Please Enter a full name")
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch
                            (login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                dispalyName: name,
                                photoUrl: profilePic

                            })
                            );
                    })
            }).catch((error) => alert(error));



    };

    return (
        <div className='login'>
            <img src='https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png' alt='' />
            <form >
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name (required if registering)"
                    type="text" />
                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder='Profile pic url(optional)'
                    type="text" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="text" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="text" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}</p>
            <span className='login_register' onClick={register}>Register Now</span>
        </div>
    )
}

export default Login