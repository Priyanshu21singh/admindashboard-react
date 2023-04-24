
import './sidebar.css';
import { LineStyle, Timeline, TrendingUp, People, Assessment, AttachMoney, MailOutline, Feedback, Message, Work, Warning, Mail } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
        
            <li className='sidebarListItem active'> 
            <LineStyle className='sidebarIcon' />
            Home
               </li>
              
               <li className='sidebarListItem'> 
            <Timeline className='sidebarIcon'/>
            Analytics
               </li>
               <li className='sidebarListItem'> 
            <TrendingUp className='sidebarIcon'/>
            Sales
               </li>
          </ul>
          <h3 className='sidebarTitle'>Quick menu</h3>
          <ul className='sidebarList'>
          <Link to="/users" className='link'>
            <li className='sidebarListItem'> 
            <People className='sidebarIcon'/>
            Users
               </li>
               </Link>
               <Link to="/products" className='link'>
               <li className='sidebarListItem'> 
            <Timeline className='sidebarIcon'/>
            Products
               </li>
               </Link>
               <li className='sidebarListItem'> 
            <AttachMoney className='sidebarIcon'/>
            Transactions
               </li>
               <li className='sidebarListItem'> 
            <Assessment className='sidebarIcon'/>
            Reports
               </li>
          </ul>
           <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'> 
            <Mail className='sidebarIcon'/>
            Mail
               </li>
               <li className='sidebarListItem'> 
            <Feedback className='sidebarIcon'/>
            Feedback
               </li>
               <li className='sidebarListItem'> 
            <Message className='sidebarIcon'/>
            Messages
               </li>
          </ul>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'> 
            <Work className='sidebarIcon'/>
            Manage
               </li>
               <li className='sidebarListItem'> 
            <Timeline className='sidebarIcon'/>
            Analytics
               </li>
               <li className='sidebarListItem'> 
            <Warning className='sidebarIcon'/>
            Reports
               </li>
          </ul>
        </div>
      </div>
    </div>
  )
}