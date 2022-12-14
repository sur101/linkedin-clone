import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
export default function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className="post_header">
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>

            </div>
            <div className="post_buttons">
                <InputOptions Icon={ThumbUpOffAltIcon} title='Like' color="gray" />
                <InputOptions Icon={CommentIcon} title='Comment' color="gray" />
                <InputOptions Icon={ShareIcon} title='Share' color="gray" />
                <InputOptions Icon={SendIcon} title='Send' color="gray" />
            </div>
        </div>
    )
}
