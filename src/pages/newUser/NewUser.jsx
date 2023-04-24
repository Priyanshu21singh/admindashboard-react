import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItems">
                <label>Username</label>
                <input type="text" placeholder="John"/>
            </div>
            <div className="newUserItems">
                <label>Fullname</label>
                <input type="text" placeholder="John Wick"/>
            </div>
            <div className="newUserItems">
                <label>Email</label>
                <input type="email" placeholder="Johnwick@gmail.com"/>
            </div>
            <div className="newUserItems">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 7"/>
            </div>
            <div className="newUserItems">
                <label>Address</label>
                <input type="email" placeholder="New York | USA"/>
            </div>
            <div className="newUserItems">
            <label>Gender</label>
            <div className="newUserGender">
              
                <input type="radio" name="gender" id="male" value="male" />
                <label>Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label>Female</label>
                <input type="radio" name="gender" id="others" value="others" />
                <label>Others</label>
                </div>
            </div>
            <div className="newUserItems">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
