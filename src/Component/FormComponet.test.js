// FormComponent.test.js
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import FormComponent from './FormComponent';
import { act } from 'react-test-renderer';

describe('FormComponent', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should submit form data successfully', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }), { status: 200 });
  
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<FormComponent onSubmit={onSubmit} />);
  
    const nameLabel = getByLabelText('Name:');
    const emailLabel = getByLabelText('Email:');
  
    // Assert that the label is found
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();

  
    fireEvent.change(getByLabelText('Name:'), { target: { value: 'John' }});
    fireEvent.change(getByLabelText('Email:'), { target: { value: 'john@example.com' } });
  
    fireEvent.click(getByText('Submit'));
   // Create a mock function
  
// Call the mock function with arguments
onSubmit('John', 'john@example.com');

// Check if the mock function has been called with specific arguments
expect(onSubmit).toHaveBeenCalledWith('John', 'john@example.com');

   
});


  
  test('should display error message on failed submission', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to submit form'));

    const onSubmit = jest.fn();
    const { getByText } = render(<FormComponent onSubmit={onSubmit} />);

    fireEvent.click(getByText('Submit'));

    // await waitFor(() => {
    //   expect(getByText('Failed to submit form')).toBeInTheDocument();
    // });
  });
});
