import "./user.css";
import { Link } from "react-router-dom";
import { PermIdentity, CalenderToday, PhoneAndroid, MailOutline, LocationSearching, CalendarToday, Update, AttachFile, Publish } from "@material-ui/icons"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="UserAddButton">Create User</button>
            </Link>
        </div>
        <div className="userContainer">
         <div className="userShow">
         <div className="userShowTop">
         
           <img className="userShowImg" src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          
          <div className="userShowTopTitle">
            <span className="userShowTopUsename">Matt Colins</span>
            <span className="userShowTopJob">Software Engineer</span>
          </div>
          </div>
         <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
          <PermIdentity className="userShowIcon" />
          <span className="userShowInfoTitle">MattColins23</span>
          </div>
          <div className="userShowInfo">
          <CalendarToday className="userShowIcon" />
          <span className="userShowInfoTitle">23 Oct 1991</span>
          </div>
          <div className="userShowInfo">
          <PhoneAndroid className="userShowIcon" />
          <span className="userShowInfoTitle">+123 456 789 </span>
          </div>
          <div className="userShowInfo">
          <MailOutline className="userShowIcon" />
          <span className="userShowInfoTitle">MattColins23@gmail.com</span>
          </div>
          <div className="userShowInfo">
          <LocationSearching className="userShowIcon" />
          <span className="userShowInfoTitle">Portugal</span>
          </div>

         </div>
         </div>
         <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
         <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input type="text" placeholder="MattColins23" className="userUpdateInput"
              />
              
            </div>
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input type="text" placeholder="Matt Colins" className="userUpdateInput"
              />
               <div className="userUpdateItem">
              <label>Email</label>
              <input type="text" placeholder="MattColins23@gmail.com" className="userUpdateInput"
              />
              
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input type="text" placeholder="+123 456 789" className="userUpdateInput"
              />
              
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input type="text" placeholder="Portugal" className="userUpdateInput"
              />
              
            </div>
            
              
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
             <img className="userUpdateImage" src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
             <label className="userUpdateIcon" htmlFor="file"><Publish/></label>
             <input type="file" id="file" style={{display: "none"}}/>
            </div>
            <button className="userUpdateButton">Update Button</button>
          </div>
         </form>
         </div>
        </div>
    </div>
  )
}
