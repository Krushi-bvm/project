
// import MockAdapter from 'axios-mock-adapter';
// import FetchUser from './FetchUser';

// describe('FetchUser', () => {
//   // Create a new instance of MockAdapter with axios instance
//   const mock = new MockAdapter(axios);

//   // Mock GET request to fetch users
//   mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//   ]);

//   it('fetches users successfully', async () => {
//     // Call the fetchUsers function
//     const users = await FetchUser();

//     // Assert that the returned data matches the mock response
//     expect(users).toEqual([
//       { id: 1, name: 'John Doe' },
//       { id: 2, name: 'Jane Smith' },
//     ]);
//   });

//   it('handles errors when fetching users', async () => {
//     // Mock a network error
//     mock.onGet('https://jsonplaceholder.typicode.com/users').networkError();

//     // Call the fetchUsers function
//     await expect(FetchUser()).rejects.toThrow('Network Error');
//   });
// });
