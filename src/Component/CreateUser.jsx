import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { API } from "./API";
import { useNavigate } from "react-router-dom";
import{useState ,useEffect} from 'react'
import EditUser from "./EditUser";



function CreateUser() {

  return (
   
  <div><EditUser/></div>

  );
}

export default CreateUser;
