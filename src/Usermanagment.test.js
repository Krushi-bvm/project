
import {  render, screen } from "@testing-library/react";
import { addUser, deleteUser, editUser } from "./Component/usermanagment/userStore/userSlice";
import userReducer from './Component/usermanagment/userStore/userSlice';

import userEvent from "@testing-library/user-event";
import FirstTest from "./Component/page/FirstTest";
import Home from "./Component/page/Home";



// describe('userReducer', () => {
//     test('should add a new user to the user list', () => {
//         const initialState = {
//             users: [],
//         };

//         const newUser = {
//             id: 1,
//             firstName: 'John',
//             lastName: 'Doe',
//             email: 'john@example.com',
//             password: 'password123',
//             subscribe: false,
//             country: 'USA',
//             gender: 'male',
//         };

//         const action = addUser(newUser);

//         const newState = userReducer(initialState, action);

//         expect(newState.users).toHaveLength(1); // Corrected to newState.users
//         expect(newState.users[0]).toEqual(newUser); // Corrected to newState.users
//     });

// });
// describe('userReducer', () => {
//     test('should edit a user in the user list', () => {
//         const initialState = {
//             users: [
//                 {
//                     id: 1,
//                     firstName: 'John',
//                     lastName: 'Doe',
//                     email: 'john@example.com',
//                     password: 'password123',
//                     subscribe: false,
//                     country: 'USA',
//                     gender: 'male',
//                 }
//             ],
//         };

//         const updatedUser = {
//             id: 1,
//             firstName: 'Updated',
//             lastName: 'Name',
//             email: 'updated@example.com',
//             password: 'updated123',
//             subscribe: true,
//             country: 'UK',
//             gender: 'female',
//         };

//         const action = editUser(updatedUser);

//         const newState = userReducer(initialState, action);

//         expect(newState.users).toHaveLength(1);
//         expect(newState.users[0]).toEqual(updatedUser);
//     });
// });
// describe('userReducer', () => {
//     test('should delete a user in the user list', () => {
//         const initialState = {
//             users: [
//                 {
//                     id: 1,
//                     firstName: 'John',
//                     lastName: 'Doe',
//                     email: 'john@example.com',
//                     password: 'password123',
//                     subscribe: false,
//                     country: 'USA',
//                     gender: 'male',
//                 }
//             ],
//         };

//         const updatedUser = 1

//         const action = deleteUser(updatedUser);

//         const newState = userReducer(initialState, action);

//         expect(newState.users).toHaveLength(0);

//     });
// });
// describe('userReducer', () => {
// test.only('btn test', async() => {
//  userEvent.setup()
//  const initialState = {
//         users: [],
//     };
// const newUser = {
//         id: '1',
//         firstName: 'anul',
//         lastName: 'test',
//         email: "test@gmail.com",
//         password: '1234',
//         subscribe: true,
//         country: 'usa',
//         gender: 'male'
//     };
//  const action = addUser(newUser)
//  const newState = { initialState, action }

  
//   const button =  screen.findByRole('Submit');

       
//      await userEvent.click(button);
// //expect(button).toBeInTheDocument()
//  expect(newState.user).toHaveLength(1);
//     // expect(newState.user[0]).toEqual(newUser)
// })})
// test('input', () => { 
//     render(FirstTest)
//     let input = screen.getByPlaceholderText('username')
//     expect(input).toBeInTheDocument()
//  })

 

