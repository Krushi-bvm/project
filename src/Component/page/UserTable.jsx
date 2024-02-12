import React, { useEffect, useState } from "react";
import { API } from "../API";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function UserTable() {
  const [user, setUser] = useState([]);
  const { state } = useLocation();
  // const { data } = state;
  // console.log(state , 'datas')

  const users = useSelector(store => store.users);
  console.log(users)
  const navigate = useNavigate();
  const fetchData = async () => {


    await API.get("/users").then((res) => {
      // console.log([...user,res.data]);

      setUser(res.data);


    });

  };




  const handleOpenEdit = (id) => {

    navigate(`/user/edit/${id}`);
  };
  console.log(user, ' users')

  const handleDeleteuser = async (id, email, username, phone) => {
    try {
      await API.delete(`/users/${id}`).then((res) => {
        if (res.data) {
          localStorage.removeItem("id");
          localStorage.removeItem("username");
          localStorage.removeItem("email");
          localStorage.removeItem("phone");
          fetchData();
        }
      });
    } catch (error) {
      alert("Failed delete user");
      console.log(error);
    }
  };
  const handleOpenView = (id) => {
    navigate(`/user/view/${id}`);
  };

  useEffect(() => {
    fetchData();
    //  const response  = data

    // const result = response.push(data)
    // console.log(result)
  }, []);

  return (
    <div className="container m-auto mx-auto">
      <div className="fs-3"> User List</div>
      <button
        className="btn btn-primary p-2 mb-2"
        onClick={() => navigate("/createuser")}
      >
        {" "}
        Add User
      </button>
      <table class="table table-striped border p-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit Usre</th>
            <th scope="col">Delete</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => {
            return (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td scope="col">
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      handleOpenEdit(
                        user.id,

                      )
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleDeleteuser(
                        user.id,
                        user.username,
                        user.email,
                        user.phone
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleOpenView(user.id)}
                  >
                    View User
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
