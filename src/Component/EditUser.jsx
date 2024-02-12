import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { API } from "./API";
import { useNavigate, useParams } from "react-router-dom";

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

function EditUser() {
  const [user, setUser] = useState([]);
  const [data , setData] = useState([])

  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [idChange, setIdChange] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 


  const submitForm = (values) => {
    // console.log(values);
    if (id) {
      updatePerson(values);
    } else {
      createPerson(values);
    }
  };

  const updatePerson = async (values) => {
    try {
      await API.put(`/users/${id}`, values).then((res) => {
        if (res.data) {
          alert("userupdate sucessfully");
          navigate("/usertable");
        }
      });
    } catch (error) {
      alert("Feild to create user");
      console.log(error);
    }
  };

  const createPerson = async (values) => {
  
    try {
      await API.post("/users", values).then((res) => {
        if(res.data?.length > 0){

          setData(res.data)
     alert("User create successfully");

        }
        // navigate('/usertable');
    // navigate('/usertable', { state: {data:data } });


      });
    } catch (error) {
      alert("Feild to create user");
      console.log(error);
    }
  }
  const onSubmit = (values) => {
    submitForm(values);
  };
  useEffect(() => {
   
    if(id){
 API.get(`/users/${id}`).then((res) => {
      setUser(res.data);
      setUsername(res.data.username);
      setemail(res.data.email);
      setPhone(res.data.phone);
    })
    }
   ;
  }, []);

  console.log(phone);

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        enableReinitialize={true}
        validationSchema={schema}
        initialValues={{
          id: "",
          username: username,
          email: email,
          phone: phone,
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
                <span> Create User</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // value={values.username}
                  value={values.username}
                  defaultValue={username}
                  className="form-control inp_text"
                  id="username"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  defaultValue={email}
                  // placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}

                <p className="error">
                  {errors.username && touched.username && errors.username}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  defaultValue={phone}
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.phone && touched.phone && errors.phone}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Update User</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default EditUser;
