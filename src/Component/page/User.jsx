import React, { useEffect, useState } from 'react'
import img1 from '../../../src/assets/Images/image 3.png'
function User(props) {
  const [data, setData] = useState([])
  console.log('dxafsvrzsfrgdh');
  const getData = async () => {
    let respone = await fetch('https://jsonplaceholder.typicode.com/users')
    respone = await respone.json()
    setData(respone)



  }
  console.log(!!false === !!true ,'trueeeee');
  let dataObj = { "data": "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB", }
  
  
  const obj2 = dataObj.data.split(',')
  var arr = [];
  obj2.forEach(function (property) {


    var [key, value] = property.split('=');
    // console.log([key]);

    arr.push({ [key]: value })

  });

  // program to check if the string is palindrome or not
  function reverseString(str){ 
    const reversedString =  
    str.split("").reduce((acc, char) => char + acc, ""); 
    console.log(reversedString); 
} 
reverseString("GeeksforGeeks"); 
function strReverse(str) { 
  if (str === "") { 
      return ""; 
  } 
  else { 
    return strReverse(str.substr(1)) + str.charAt(0); 
} 
} 
console.log(strReverse("javascript"),'strReverse'); 
  checkPalindrome('madam');
function checkPalindrome(string) {

  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      console.log('It is a palindrome');
  }
  else {
      console.log('It is not a palindrome');
  }
}

  console.log(NaN === NaN,'nalll')
  console.log(NaN !== NaN ,'not null  ')


  // console.log(arr);
  const arr2 = arr.filter((i) => i.age >= 50)
  // console.log(arr2,'arrrrrrr')
const isLowerCase  = (str, index) => {
  const a =str[index].toUpperCase()
  return  str[index]=== str[index].toLowerCase()
  
 



}
  console.log(isLowerCase('Js STRING EXERCISES', 1))
//closure//
const closer = (a) => {
  return (b) => {
    return a + b;
  };
} 

let  addFive = closer(5);
console.log(addFive(3));
console.log(closer() ,'close');
  const capitalize_word = (str) => {
    return console.log(str.split(' ').
      map((e) => e[0].toUpperCase() + e.slice(1)).join(" "))
}

  console.log(capitalize_word('i am react js developer with seven year of experience.'))
  useEffect(() => {

    getData()
  }, [])

  const isVovels = (str) => {
    let count = 0
    let arr=[]
    for (let i = count; i < str.length; i++) {
      const ch = str[i].toUpperCase()
      if (ch == 'A' || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
        
        arr.push(ch)
        count++ ;
      }
    }
    // const count = str.match(/[aeiou]/gi).length;
 // return number of vowels
    return arr
}
  console.log(isVovels('countVowels'), 'isVovels')


  const longestWord = (str) => {
    let words = str.split(" ")
    let arr = []
    for (let i = 0; i < words.length; i++) {

      arr.push(words[i].length);
    }
    //  var wordLengths = words.map(function(word){
    //    return word.length;
    //  });
    var maxIndex = Math.max(...arr);
    return words[arr.indexOf(maxIndex)]
    //  var longest = Math.max.apply(Math, wordLengths);
    //  return longest
  }
  console.log(longestWord('Hello world123 567'), 'longestWord')

  // let c= "" 
  // console.log(typeof c,'cccccc')

  // const a = 30+20-"10"
  // console.log(a ,'/////')
  // console.log(data)
  // let b =[]
  // if(b.length){
  //    console.log(true)
  // }
  // else{
  //   console.log(false)
  // }
  return (
    <>
      <div>username</div>
      {/* <div>{props.name}</div> */}

      <img src={img1} class="img-fluid d-block ms-auto me-auto rotate-45" alt="Rotated Image"/>


      {data.map((data) => {
        return (
          <ul>
            <li>  {data.name}</li>

          </ul>
        )
      })}

      {/* <button role='button' onClick={props.testfunction}>button</button> */}
      {/* <div>{props.name}</div> */}
    </>

  )
}

export default User