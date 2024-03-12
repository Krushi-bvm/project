
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { API } from "./API";
import { useNavigate, useParams } from "react-router-dom";
import DecryptData from "./DecryptData";
import EncryptData from "./EncryptData";

// Creating schema
const schema = Yup.object().shape({
  // username: Yup.string().required(" UserName is a required field"),
  // email: Yup.string()
  //   .required("Email is a required field")
  //   .email("Invalid email format"),
  // phone: Yup.string()
  //   .required("Phone is a required field")
  //   .min(10, "Password must be at least 10 characters"),
});

function Login() {
  const [user, setUser] = useState([]);



  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate();
  



  const submitForm = (values) => {
    
      login(values);
    
  };

 
  
  

  
  const login = async (values) => {
    try {
      const encrypted = EncryptData(values);
      console.log(JSON.stringify(encrypted));
      await API.post("auth/sign-in", { encrypted }).then((res) => {
        console.log(res.data);
        if (res.data) {
          const userData = (DecryptData(res.data));
         console.log(userData ,'userData');
         localStorage.setItem('userdata',userData);
        //  setUser(JSON.parse(userData));

        localStorage.setItem('token',JSON.parse(userData).data.token);
        localStorage.setItem('role',JSON.parse(userData).data.role);
          navigate('/usertable'); 
        }
      });
    } catch (error) {
     
      console.log(error);
    }
  };
  
  const onSubmit = (values) => {
    console.log(values ,'values');
    submitForm(values);
  };


  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        enableReinitialize={true}
        // validationSchema={schema}
        initialValues={{
         email: email,
          password: password,
        }}
        onSubmit={(values) => {
          onSubmit(values);
          // Alert the input values of the form that we filled
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
               <span> Login User</span>
               
                <label htmlFor="">Email Address</label>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email Address"
                  onBlur={handleBlur}
                  value={values.email}
                  defaultValue={email}
                  // placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
               
                  <label htmlFor="">Password</label>

                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="password"
                    onBlur={handleBlur}
                    value={values.password}
                    defaultValue=""
                    className="form-control"
                  />
             
                {/* <p className="error">
                  {errors.password && touched.password && errors.password}
                </p> */}
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Login;
