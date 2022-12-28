import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./tableui.css";
import { async } from "@firebase/util";


const Tableui = () => {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3500/usersdata");
    setUserData(result.data.reverse());
  };

  const deleteUser = async id => {
     await axios.delete(`http://localhost:3500/usersdata/${id}`);
     loadUsers();
    
  };

  return (
    <div className="container">
      <div className="py-4">
      <span>
        <h1>Data Table</h1>
        <Link 
        className="add-style" 
        to="/crud/add"
        style={{textDecorationLine: 'none'}}
        >
        Add User
        </Link>
        </span>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link 
                  className="btn btn-outline-primary mr-2" 
                  to={`/crud/view/${user.id}`}
                  style={{marginRight:'10px'}}
                  >
                    View
                  </Link>
                   <Link
                    className="btn btn btn-outline-warning mr-2"
                    to={`/crud/edit/${user.id}`}
                    style={{marginRight:'10px'}}
                  >
                    Edit
                  </Link> 

                  
                  <Link
                    className="btn btn-outline-danger"
                    to={`/crud`}
                   
                    onClick={() => deleteUser(user.id)}
                    >
                   delete
                  </Link> 
                  
                  {/* <div>
                  <button><i class="bi bi-trash"></i>  View</button>
                  <button>  Edit</button>
                  <button>  Delete</button>
                  </div> */}
                  
                

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tableui;
