import React, { useEffect, useState } from 'react'
import './Feed.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ImageIcon from '@mui/icons-material/Image';
import InputOptions from './InputOptions';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

import { useSelector } from 'react-redux';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { selectUser } from '../userSlice';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        )
    }, [])
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })

    }
    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <BorderColorIcon />
                    <form >
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOptions Icon={VideocamIcon} title='Video' color="#E7A33E" />
                    <InputOptions Icon={EventIcon} title='Event' color="#C0CBCD" />
                    <InputOptions Icon={ArticleIcon} title='Write Article' color="#7FC15E" />
                </div>


            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />))}


        </div>
    )
}

export default Feed