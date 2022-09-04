import React from 'react'
import "./HeaderOption.css"
import { selectUser } from './userSlice';
import { useSelector } from 'react-redux';
// import { Avatar } from '@mui/material';

function HeaderOption({ Avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className='headerOption_icon' />}
            <Avatar className="headerOption_icon" >{user.email[0]}</Avatar>/** */
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOption