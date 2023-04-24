import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
        <div className='topLeft'>
            <span className='logo'>Dashboard</span>
        </div>
        <div className='topRight'>
            <div className='topbarIconContainer'>
            <NotificationsNone />
                <span className="topIconBadge">3</span>
            </div>
            <div className='topbarIconContainer'>
           <Language />
           <span className="topIconBadge">3</span> 
            </div>
            <div className='topbarIconContainer'>
            <Settings />   
            </div>
            <div>
              <img src='https://priyanshu21singh.github.io/React-prs-website/static/media/impps.da78433e94e0abf25cb6.png' alt='picture' className='topAvatar' />
            </div>
        </div>
        </div>
    </div>
  )
}
