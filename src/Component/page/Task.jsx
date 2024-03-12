import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Task() {
  const [removeDuplicate, setDuplicate] = useState([])
  const [duplicate, setDuplicates] = useState(['H'])
  //-------question 14------//
  const arr = [1, 2, 2, 3, 4, 4]

  const removeDuplicates = (arr) => {
    return arr.filter((item, index) =>arr.indexOf(item) === index);
    
  }
// console.log(removeDuplicates( [1, 2, 2, 3, 4, 4]),'removeDuplicates');
  var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];


  const Ordinal = (num) => {
    var o = ["th", "st", "nd", "rd"]
 if(num >=1 && num <=3){
  return o[num]

 }
 else{
  return   o[0]

 }

      // x = num % 100;


      // switch(num% 10){
      //   case 1: return  'st';
      //   case 2: return  'nd';
      //   case 3: return  'rd';



      // }
     

    // return x + (o[(x - 20) % 10] || o[x] || o[0]);
  }

  for (let n = 0; n < color.length; n++) {
    var ordinal = n + 1;

    var output = (ordinal +Ordinal(ordinal) + " choice is " + color[n] + ".");
    console.log(output)
  }
  function leapYearRange(st_year, end_year) {
    var yearRange = [];
    let count = 0;
    for (var i = st_year; i <= end_year; i++) {
      if(i % 4 === 0){
        yearRange.push(i);
      }
     
    
    
    }
    console.log(yearRange);
    
    // var new_array = [];

    // yearRange.map((year) => {
    //   if (leapYear(year))
    //     new_array.push(year);
    // });

    // return new_array;
  }

  const leapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      return year;
    } else {
      return false;
    }
  }

  console.log('question 16', leapYearRange(2000, 2023));



  function binarySearch(arr, target) {

    let start = 0
    let end = arr.length -1
    console.log(end, 'end')
    while (start <= end) {
      let middle = Math.floor((start + end) / 2)
      console.log(middle ,'middle')

      if (arr[middle] < target) {

        start = middle + 1
      } else if (arr[middle] > target) {

        end = middle - 1
      } else if (arr[middle] === target) {

        return middle
      }
    }

    
    return -1
  }

  let item = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log("binarySearch", binarySearch(item, 1))
  console.log(binarySearch(item, 6), 'binarySearch')
  const shuffleArrays = (array) => {
    let len = array.length,
      currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {

      let randIndex = Math.floor(Math.random() * (currentIndex + 1));
      var temp = array[currentIndex];
      array[currentIndex] = array[randIndex];

      array[randIndex] = temp;
      console.log(array[randIndex], 'randIndex')
    }
  }
  let a = [1, 2, 3, 4, 5];
  console.log("Array before Shuffling", a);

  console.log("Shuffling array");
  shuffleArrays(a);

  console.log("Array after Shuffling", a);

  useEffect(() => {


    setDuplicate(removeDuplicates(arr))

  }, [])
  let headTail = []
  const handleChange = (str) => {

    let last = headTail?.length ? headTail[headTail?.length - 1] : [];
    if (last?.length && last[last?.length - 1] === str) {
      last.push(str)
    } else {
      headTail.push([str]);
    }
    console.log(headTail)
  }


  return (
    <div className='container '>

      {/* <div>   Question 14 :-{`remove duplicate items from array is ${removeDuplicate}`}</div>
      <div className='d-flex mt-4 gap-2'>

        <button className='btn btn-secondary' onClick={(e) => handleChange("H")}>H</button>
        <button className='btn btn-secondary' onClick={(e) => handleChange("T")} >T</button>


      </div> */}
    </div>
  )
}

export default Task