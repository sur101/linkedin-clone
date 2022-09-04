import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Face2RoundedIcon from '@mui/icons-material/Face2Rounded';
// import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import { useDispatch, /*useSelector*/ } from "react-redux";
import { auth } from '../firebase';
import { logout } from './userSlice';
// import { selectUser } from './userSlice';

function Header() {
    // const user=useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };


    return (
        <div className="header">

            <div className="header_left">
                <img src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>

            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={PeopleIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={SmsIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notification' />
         /** */       <HeaderOption Avatar={true} title='me'
                    onClick={logoutOfApp} />


            </div>
        </div>
    )
}

export default Header