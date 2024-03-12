import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { API } from "./API";
import { useNavigate, useParams } from "react-router-dom";
import DecryptData from "./DecryptData";
import EncryptData from "./EncryptData";

const schema = Yup.object().shape({
  // Define your validation schema here
});

function EditUser() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const role = localStorage.getItem("role");

  const submitForm = (values) => {
    if (id) {
      updatePerson(values);
    } else {
      createPerson(values);
    }
  };

  const updatePerson = async (values) => {
    try {
      const encrypted = EncryptData(values);
      const response = await API.put('user', { encrypted });
      if (response.data) {
        const userData = DecryptData(response.data);
        navigate('/usertable');
      }
    } catch (error) {
      console.error("Error while updating user:", error);
    }
  };

  const createPerson = async (values) => {
    try {
      const encrypted = EncryptData(values);
      await API.post("auth/sign-up", { encrypted }).then((res) => {
        if (res.data?.length > 0) {
          const userData = DecryptData(res.data);
          navigate('/usertable');
        }
      });
    } catch (error) {
      alert("Failed to create user");
      console.log(error);
    }
  };

  const onSubmit = (values) => {
    submitForm(values);
  };

  useEffect(() => {
    if (id) {
      API.get(`user/${id}`).then((res) => {
        const userData = DecryptData(res.data);
        setData(JSON.parse(userData));
        setEmail(data[0]?.email);
      });
    }
  }, [id, data]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        _id: id,
        email: email,
        password: password,
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="login">
          <div className="form">
            <form noValidate onSubmit={handleSubmit}>
              {id ? <span> Edit User</span> : <span> Create User</span>}
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email Address"
                onBlur={handleBlur}
                value={values.email}
                defaultValue={email}
                disabled={role === 'admin'}
                className="form-control inp_text"
                id="email"
              />
              {!id ? (
                <>
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="password"
                    onBlur={handleBlur}
                    value={values.password}
                    disabled={role === 'admin'}
                    defaultValue=""
                    className="form-control"
                  />
                </>
              ) : null}
              <button type="submit">{id ? "Update User" : "Create User"}</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default EditUser;
