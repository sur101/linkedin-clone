import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../userSlice'
import './Sidebar.css'
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) =>
    (
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80" alt="" />
                <Avatar src={user.photoUrl} className='sidebar_avatar' >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,846</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'> 2,246</p>
                </div>
            </div>
            <div className="sidebar_buttom">
                <p>Recent</p>
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('reactjs')}
            </div>
        </div>
    )
}

export default Sidebar