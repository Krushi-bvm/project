import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { API } from "./API";
import { useNavigate } from "react-router-dom";
import{useState ,useEffect} from 'react'
import EditUser from "./EditUser";

// Creating schema
const schema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),

  phone: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function CreateUser() {
  const [data , setData] = useState([])
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await API.post("/users", values).then((res) => {
     
       
    
 
        setData(res.data)
        // navigate('/usertable', { state: { data} });
        navigate('/usertable', { state: {data:data } });
     
        if (data) {
          

          alert("User create successfully");
         
        }
      });
    } catch (error) {
      alert("Feild to create user");
      console.log(error);
    }
  };

  console.log(data);
useEffect(() => {},[data])
  const onSubmit = (values) => {
    handleSubmit(values);
  };
  return (
    // <>
    //   {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
    //   <Formik
    //     validationSchema={schema}
    //     initialValues={{ username: "", email: "", phone: "" }}
    //     onSubmit={(values) => {
    //       onSubmit(values);
    //       // Alert the input values of the form that we filled
    //     }}
    //   >
    //     {({
    //       values,
    //       errors,
    //       touched,
    //       handleChange,
    //       handleBlur,
    //       handleSubmit,
    //     }) => (
    //       <div className="login">
    //         <div className="form">
    //           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
    //           <form noValidate onSubmit={handleSubmit}>
    //             <span> Create User</span>
    //             {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
    //             <input
    //               type="username"
    //               name="username"
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               value={values.username}
    //               placeholder="Enter username"
    //               className="form-control inp_text"
    //               id="username"
    //             />
    //             <p className="error">
    //               {errors.username && touched.username && errors.username}
    //             </p>
    //             <input
    //               type="email"
    //               name="email"
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               value={values.email}
    //               placeholder="Enter email "
    //               className="form-control inp_text"
    //               id="email"
    //             />
    //             {/* If validation is not passed show errors */}

    //             <p className="error">
    //               {errors.email && touched.email && errors.email}
    //             </p>
    //             {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
    //             <input
    //               type="phone"
    //               name="phone"
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               value={values.phone}
    //               placeholder="Enter phone"
    //               className="form-control"
    //             />
    //             {/* If validation is not passed show errors */}
    //             <p className="error">
    //               {errors.phone && touched.phone && errors.phone}
    //             </p>
    //             {/* Click on submit button to submit the form */}
    //             <button type="submit">Create User</button>
    //           </form>
    //         </div>
    //       </div>
    //     )}
    //   </Formik>
    // </>
  <div><EditUser/></div>

  );
}

export default CreateUser;
// import React from 'react'
// import EditUser from './EditUser'

// function CreateUser() {
//   return (
//     <div><EditUser/></div>
//   )
// }

// export default CreateUser