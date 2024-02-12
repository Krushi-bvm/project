import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const employeeState = {
  updateState: false,
  loading: false,
  employeeList: [],
  error: "",
  response: "",
};


export const fetchEmployee = createAsyncThunk(
  //action type string
  'employee/fetchEmployee',
  // callback function
  async () => {
    const res = await  axios.get('https://jsonplaceholder.typicode.com/users')
    
  
  return res.data
})

// export const fetchEmployee = createAsyncThunk(
//   "employee/fetchEmployee",
//   async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     return response.data.response;
//   }
// );
export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (data) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
      name: data.name,
      email: data.email,
    });
   
    return response.data
    
  }
);

export const removeEmployee = createAsyncThunk(
  "employee/removeEmployee",
  async (data) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${data}`
    );
    return response.data.response
    
  }
);

export const modifiedEmployee = createAsyncThunk(
  "employee/modifiedEmployee",
  async (data) => {
   
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${data.id}`,
      {
        id:data.id,
        name: data.name,
        email: data.email,
      }
    );
    return response.data.response
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: employeeState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employeeList.push(action.payload);
        state.response = "add";
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchEmployee.fulfilled, (state, action) => {
        state.employeeList = action.payload;
      })
      .addCase(fetchEmployee.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder.addCase(removeEmployee.fulfilled, (state, action) => {

      state.employeeList = state.employeeList.filter(
        (item) => item.id != action.payload

      );
      console.log("action.payload", state.employeeList)

      state.response = "delete";
    });

    builder.addCase(modifiedEmployee.fulfilled, (state, action) => {

      const updateItem = action.payload;
      
console.log(updateItem)

      const index = state.employeeList.findIndex(
        (item) => item.id === updateItem.id
      );
      if (index!==-1) {
        state.employeeList[index] = updateItem;
      }
      state.response = "update";
    });
  },
});

export default employeeSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  employeeSlice.actions;
  