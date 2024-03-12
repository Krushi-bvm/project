import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import './bingo.css';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateBingoCard = () => {
  const card = [];
  const cols = ['B', 'I', 'N', 'G', 'O'];
  for (let i = 0; i < cols.length; i++) {
    const colNumbers = [];
    for (let j = 0; j < 5; j++) {
      let num;
      if (i === 2 && j === 2) {
        num = 'FREE';
      } else {
        do {
          num = getRandomNumber(i * 15 + 1, (i + 1) * 15);
        } while (colNumbers.includes(num));
      }
      colNumbers.push(num);
    }
    card.push(colNumbers);
  }
  return card;
};

const checkWin = (card) => {
return card.every(row => row.every(cell => cell === 'X'));
};

const Bingo = () => {
  const [bingoCard, setBingoCard] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [bingoCompleted, setBingoCompleted] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  const generateNumber = () => {
    const row = Math.floor(Math.random() * 5);
    const col = Math.floor(Math.random() * 5);
    const newCard = [...bingoCard];
    newCard[row][col] = getRandomNumber(1, 75); // Generate a random number between 1 and 75
    setBingoCard(newCard);
    setSelectedNumbers([...selectedNumbers, newCard[row][col]]);
    if (checkWin(newCard)) {
      setBingoCompleted(true); // Set Bingo completed if all cells are marked
    }
  };

  const markCell = (row, col) => {
    const newCard = [...bingoCard];
    newCard[row][col] = 'X'; // Mark the cell
    setBingoCard(newCard);
    if (checkWin(newCard)) {
      setBingoCompleted(true); // Set Bingo completed if all cells are marked
    }
  };

  useState(() => {
    setBingoCard(generateBingoCard());
  }, []);

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    text: {
      textAlign: 'center',
    },
  });

  const BingoNumbers = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Selected Numbers</Text>
          {selectedNumbers.map((number, index) => (
            <Text key={index} style={styles.text}>
              {number}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Bingo Card</Text>
          {bingoCard.map((col, colIndex) => (
            <View key={colIndex} style={styles.section}>
              {col.map((cell, cellIndex) => (
                <Text key={cellIndex} style={styles.text}>
                  {cell}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  const handleDownloadPDF = () => {
    setShowPDF(true); // Set showPDF state to true to render BingoNumbers component
    
    // // Generate the PDF content
    // const pdfContent = (
    //   <Document>
    //     <Page size="A4" style={styles.page}>
    //       <View style={styles.section}>
    //         <Text style={styles.text}>Selected Numbers</Text>
    //         {selectedNumbers.map((number, index) => (
    //           <Text key={index} style={styles.text}>
    //             {number}
    //           </Text>
    //         ))}
    //       </View>
    //       <View style={styles.section}>
    //         <Text style={styles.text}>Bingo Card</Text>
    //         {bingoCard.map((col, colIndex) => (
    //           <View key={colIndex} style={styles.section}>
    //             {col.map((cell, cellIndex) => (
    //               <Text key={cellIndex} style={styles.text}>
    //                 {cell}
    //               </Text>
    //             ))}
    //           </View>
    //         ))}
    //       </View>
    //     </Page>
    //   </Document>
    // );
  
    // // Convert the PDF content to a Blob
    // const blob = new Blob([pdfContent], { type: 'application/pdf' });
  
    // // Create a URL for the Blob
    // const url = URL.createObjectURL(blob);
  
    // // Create a link element to trigger the download
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'bingo.pdf';
  
    // // Append the link to the document and trigger the download
    // document.body.appendChild(a);
    // a.click();
  
    // // Clean up by removing the link and revoking the URL
    // document.body.removeChild(a);
    // URL.revokeObjectURL(url);
  };
  

  return (
    <div className="bingo-game">
      <h1>Bingo Game</h1>
      {bingoCompleted ? <p>Bingo completed!</p> : null}
      <div className="bingo-card">
        {bingoCard.map((col, colIndex) => (
          <div key={colIndex} className="bingo-column">
            {col.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`bingo-cell ${cell === 'FREE' ? 'free-space' : ''} ${cell === 'X' ? 'marked' : ''}`}
                onClick={() => markCell(colIndex, cellIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={generateNumber}>Generate Number</button>
      <button onClick={handleDownloadPDF}>Download PDF</button>
      {showPDF && <BingoNumbers />}
    </div>
  );
};

export default Bingo;

