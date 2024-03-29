import React, { useEffect, useState } from 'react'

function Books() {
    const [books, setBooks] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const fetchBooks = async () => {
        try {
            const response = await fetch(
                'https://www.anapioficeandfire.com/api/books',
                {headers: {'Content-Type': 'application/json'}, method: "GET"});

            if (response.status === 200) {
                setBooks(await response.json());
                setErrorMessage(undefined);
            } else if (response.status === 404) {
                setErrorMessage('The server could not find this page.');
            } else {
                setErrorMessage('The server did not respond the data we wanted. We apologize for the inconvenience.');
            }
        } catch (error) {
            setErrorMessage('We were unable not retrieve any books due to connection problems. Please check your internet connection.');
        }
    };

    console.log(books);
   
    const displayBooks = () => {
        return (
            <div>
                {books.map((book, index) => {
                        const indexToDisplay = index += 1;
                        return <div key={`book${index}`}>{indexToDisplay}&nbsp;{book.name}</div>
                })}
            </div>
        );
    };

    return (
        <div className="App">
            <button onClick={fetchBooks}>Get GoT books</button>
            {errorMessage ? <p>Error: {errorMessage}</p> : displayBooks()}
        </div>
    );
}

export default Books