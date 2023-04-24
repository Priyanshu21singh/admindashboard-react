import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {userRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from 'react';




export default function UserList() {
  const [data,setData] = useState(userRows);
  const handleDelete = (id) => {
setData(data.filter((item)=> item.id !== id));
  }
const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: "user",
    headerName: 'User',
    width: 160,
    editable: true,
    renderCell: (params) => {
      return(
        <div className='userListUser'>
          <img className='userListImg' src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    }
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    editable: true,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
   
  },
  {
    field:'action',
    headerName:'Action',
    width:150,
    renderCell: (params) => {
      return(
        <div>
        <Link to={"/user/"+params.row.id}>
        <button className="actionButton">Edit</button>
        </Link>
        <DeleteOutline className='deleteItem' onClick= {() => (handleDelete(params.row.id))}/>


        </div>
      )
    }
  }
];



  return (
    <div className='userList'>
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
