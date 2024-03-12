import React, { useEffect, useState } from "react";
import { API } from "../API";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import DecryptData from "../DecryptData";
import EditUser from "../EditUser";

function UserTable() {
  const [user, setUser] = useState([]);
  const role = localStorage.getItem("role");

  const [updateTrigger, setUpdateTrigger] = useState(false);

  const users = useSelector(store => store.users);


  console.log(users)

  const fetchUpdatedData = async () => {
    await API.get("user").then((res) => {
      const data = DecryptData(res.data);
      setUser(JSON.parse(data));
    });
  };



  useEffect(() => {
    fetchUpdatedData();
  }, []);

  // Callback function to handle user data update


  const navigate = useNavigate();


  const handleOpenEdit = (id) => {


    navigate(`/user/${id}`);

  };
  console.log(user, ' users')

  const handleDeleteuser = async (id) => {
    try {
     
      await API.delete(`user/${id}`).then((res) => {
        if (res.data) {
          const userData = DecryptData(res.data);
          console.log(userData);

          // localStorage.removeItem("id");
          // localStorage.removeItem("username");
          // localStorage.removeItem("email");
          // localStorage.removeItem("phone");
          fetchUpdatedData();
        }
      });
    } catch (error) {
      alert("Failed delete user");
      console.log(error);
    }
  };
  const handleOpenView = (id) => {
    navigate(`/view/${id}`);
  };



  return (
    <div>


      <div className="fs-3"> User List</div>

      <div className="container ">
      {role == 'user' ?
          <>
            <div>
              <button
              className="btn btn-primary  mb-2"
              onClick={() => navigate("/create")}
            >

              Add User
            </button></div>
            <table class="table table-striped border p-2">
              <thead>
                <tr>

                  <th scope="col">Email</th>
                 <th scope="col">Edit</th>
                 <th scope="col">Delete</th>

                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user) => {
                  return (
                    <tr key={user.id}>


                      <td>{user.email}</td>
                      <td scope="col">
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            console.log(user._id);
                            handleOpenEdit(user._id)}}
                        >
                          Edit
                        </button>
                      </td>

                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handleDeleteuser(user._id)
                          }
                        >
                          Delete
                        </button>
                      </td>

                      <td>
                        <button
                          className="btn btn-secondary"
                          onClick={() => {


                            handleOpenView(user._id)
                          }}
                        >
                          View User
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table></> :
          <table>
            <thead>
              <tr>
           <th scope="col">Email</th>


              </tr>
            </thead>
            <tbody>
              {user.map((user) => {
                return (
                  <tr>
                    <td>{user.email}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        }

      </div>
      <Outlet />
    </div>
  );
}

export default UserTable;
