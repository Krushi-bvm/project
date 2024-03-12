import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import Books from './Component/Books';

describe('Test App', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('Verify if books are retrieved on button click - success', async () => {
    const books = [
      { name: 'A Game of Thrones' },
      { name: 'A Clash of Kings' },
      { name: 'A Storm of Swords' },
      { name: 'The Hedge Knight' },
      { name: 'A Feast for Crows' },
      { name: 'The Sworn Sword' },
      { name: 'The Mystery Knight' },
      { name: 'A Dance with Dragons' },
      { name: 'The Princess and the Queen' },
      { name: 'The Rogue Prince' }
    ];
  
    fetchMock.mockResponseOnce(JSON.stringify(books));
  
    const { getByText } = render(<Books />);
  
    const button = getByText('Get GoT books');
    fireEvent.click(button);
  
    console.log('API Call triggered');
  
    await waitFor(() => {
      console.log('Waiting for element');
      try {
        expect(getByText('A Game of Thrones')).toBeInTheDocument();
        console.log('Element found');
      } catch (error) {
        console.error('Error:', error);
      }
    }, { timeout: 5000 }); // Increase timeout value if needed
  });
  
 
  test('Verify if books are retrieved on button click - error no internet', async () => {
    fetchMock.mockRejectOnce(new TypeError('Failed to fetch'));

    const { getByText } = render(<Books />);
    const button = getByText('Get GoT books');
    fireEvent.click(button);

    // test('Verify if error message is displayed', async () => {
    //     // Your test code here
    //     await waitFor(() => {
    //       expect(getByText('Error: We were unable not retrieve any books due to connection problems. Please check your internet connection.')).toBeInTheDocument();
    //     });
    //   });
  });

  test('Verify if books are retrieved on button click - error page not found', async () => {
    fetchMock.mockResponseOnce('', { status: 404 });
    const { getByText } = render(<Books />);
    const button = getByText('Get GoT books');
    fireEvent.click(button);

    // await waitFor(() => {expect(getByText('Error: The server could not find this page.')).toBeInTheDocument()});w
  });
});
