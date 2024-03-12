import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import EditUser from './EditUser';
import { API } from './API';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

// Mocking the API module
jest.mock('./API');

describe('EditUser Component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('should submit form data when creating a new user', async () => {
    const navigateMock = jest.fn();
    const mockParams = { id: null }; // Simulate creating a new user
    const { getByLabelText, getByText } = render(
      <EditUser />,
      { wrapper: MemoryRouter } // Use MemoryRouter instead of BrowserRouter
    );

    // Mock user input values
    fireEvent.change(getByLabelText('Email Address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });

    // Mock the API post request
    API.post.mockResolvedValueOnce({ data: { message: 'User created successfully' } });

    // Trigger form submission
    fireEvent.click(getByText('Create User'));

    // Wait for form submission to complete
    await waitFor(() => {
      expect(API.post).toHaveBeenCalledTimes(1); // Check if API post method is called once
      expect(API.post).toHaveBeenCalledWith('auth/sign-up', expect.any(Object)); // Check if the API endpoint and data are correct
      // You can use navigateMock here to check if navigation occurs after successful form submission
    });
  });

  // Add more test cases as needed for other scenarios such as updating an existing user
});
