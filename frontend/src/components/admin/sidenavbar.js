import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './sidenavbar.css'; // Import your CSS file for styling

function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="sidebar">
    <Link to="/admin">List of users</Link>
    <Link to="/userbooking">Bookings</Link>
  </div>
  );
}


export default SideNavBar;
