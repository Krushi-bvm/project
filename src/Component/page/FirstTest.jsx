import { useEffect, useState } from "react"
import User from "./User"

export const sum = (a,b ) => {
  return a+b
}
const FirstTest = () => {
const [data , setData] = useState(false)
const [btnData , setBtnData] = useState('')
const [update , setUpdate] = useState('')
const [value , setValue] = useState('')
const arr = [1,2,3]
arr[5] = 5


console.log(arr[5],'dtgrdfy')
const handleUpdate = () => {
  setUpdate('hello')

}
var List = [10,12,15,30];
var updatedList = List.map((l)=>{ return l * 2  
});
console.log("original List" ,updatedList) 

useEffect(() => {
  setTimeout(() => {
  setData(true)
    
  }, 4000);
},[])
    return (
      <div>
        <h2>{updatedList}</h2>
          <h2> First test </h2>
          {/* <button> Submit </button> */}
          <div>
      <label htmlFor="checkbox">Check</label>
      <input id="checkbox" type="checkbox" placeholder="userCheckbox" />
       <label for="username">Username</label>
       {data ? <p>data  found</p> :<p>not data found</p>}
       {/* <input type="text" value={data} onChange={(e) => setData(e.target.value)} /> */}
       {/* <button onClick={(e) => setBtnData('updated data')}>button</button>
       <button onClick={handleUpdate} data-testid="btn1">update</button> */}
       <button>click me</button>
       <button>click me</button>
       <button>click me</button>
       <button>click me</button>
       <button>click me</button>
       <button>click me</button>
       <button>click me</button>
       <select>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
       </select>
       <p>{btnData}</p>
       <p>{update}</p>
       <label htmlFor="lastname">Last Name</label>
       <input type="text" placeholder="lastname" defaultValue="last"/>
       <p  className="test">helooooo</p>
       <div div-id="app">
        <input type="text" defaultValue={'anil'}/>
        <input type="chekbox" defaultValue={'anils'} />
        <input type="radio" defaultValue={'anil dfsdgf'} />
        <button title="click">CLICK HERE</button>
        <button title="click">CLICK HERE</button>
        <img src="../assets/Images/image 1.png" alt="img" />
        <img src="../assets/Images/image 1.png" alt="img" />
        <p id='textid'>hello world</p>
        <div>heloo div 
          <p>hiii</p>
          <p>hellloooo</p>
        </div>
        <button onClick={() => setBtnData('testing')}>clicks here</button>
        <input type="text" onChange={(e) =>setValue(e.target.value) }/>
    {/* <label for="username-input">Username</label>
    <input id="username-input" /> */}
<User name='UserName' />

  </div>
    </div>
      </div>
    )
  }
  export default FirstTest