import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./API";

function ViewUser() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchData = async () => {
    await API.get(`/users/${id}`).then((res) => {
      setUser(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="card col-lg-6 m-lg-auto mt-5">
        {/* {Object.keys(user).map((value) => {
          <div className="text-dark">{value.username}</div>;
        })} */}
        <h4 className="card-header"> View User</h4>

        <div className="card-body">
          <h4 className="card-header">
            {" "}
            UserName: <span className="">{user.username}</span>{" "}
          </h4>

          <div>
            <h6 className="card-title">
              Name : <span>{user.name}</span>
            </h6>
            <p className="card-text">
              <h6>
                Email : <span>{user.email}</span>
              </h6>
              <h6>
                Phone : <span>{user.phone}</span>
              </h6>
              <h6>
                website :<span>{user.website}</span>
              </h6>
              <div>
                <h4 className="card-header"> Address </h4>
                <h6>
                  City: <span>{user.address?.city}</span>
                </h6>
                <h6>
                  street: <span>{user.address?.street}</span>
                </h6>
                <div></div>
                <h6>
                  lat: <span>{user.address?.geo?.lat}</span>
                </h6>
                <h6>
                  Geo(lng) : <span>{user.address?.geo?.lng}</span>
                </h6>

                <h6>
                  Geo(suite): <span>{user.address?.suite}</span>
                </h6>
                <h6>
                  Zipcode: <span>{user.address?.city}</span>
                </h6>
              </div>
              <div>
                <h4 className="card-header">Company</h4>
                <h6>
                  Name: <span>{user.company?.name}</span>
                </h6>
                <h6>
                  Bs: <span>{user.company?.bs}</span>
                </h6>
                <h6>
                  CatchPhrase: <span>{user.company?.catchPhrase}</span>
                </h6>
              </div>
            </p>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/usertable")}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
