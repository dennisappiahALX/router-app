import React from 'react'
import SideBar from './SideBar';
import {Route, Routes, useNavigate} from "react-router-dom";
import Users from './Users';
import Posts from './Posts';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar/>
      {/* route content definition */}
       <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default Dashboard