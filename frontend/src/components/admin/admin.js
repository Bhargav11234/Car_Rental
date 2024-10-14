import { useEffect, useState } from 'react';
import axios from "axios";
import "./admin.css"
import { BASE_URL } from "./../../utils/config";

import SideNavBar from './sidenavbar';


function Admin() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
     axios.get(`${BASE_URL}/users/`,users)
    //  .then(console.log(users))
     .then(users=>setUsers(users.data))
     .catch(err=>console.log(err))
  },[])
  return (
    <>
    <div className='ni'>
    <SideNavBar/>
    <h2 style={{textAlign:"Center"}} className='mt-30'>List of All Users</h2>
    <div className='mt-20 mb-20 d-flex justify-content-center align-items-center'>
      <div className='w-50'>
   
    <table className='table'>
      <thead>
        <tr>
          <th>
            Username
          </th>
          <th>
            Email
          </th>
          <th>
            Role
          </th>
        </tr>
        </thead>
        <tbody>
          {
            users.map(user=>{
             return <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            })
          }
        </tbody>
      
    </table>
    </div>
    </div>
    </div>
    </>
  );
}

export default Admin;
