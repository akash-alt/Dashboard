import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Tableui from '../../components/crud/Tableui';


const Crud = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>
            <Tableui/>
        </div>
        </div>
        </div>
  )
}

export default Crud