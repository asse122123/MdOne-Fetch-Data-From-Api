
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const[data, setData] = useState([])

  const fetch =() => {
    axios.get('http://127.0.0.1:8000/midd1/student-list/')
    .then((res) => setData(res.data))
    .then(err => console.log(err))
  }
  useEffect(()=>{
    fetch();
  },[])
  return (
  <div>
    <p className='aa'>Student-Lists/Mid Exam</p>
    {data.map((res) => {
      return (

      <div className='ab'>
       <p className='fname'>FirstName:  {res.firstName}</p>
       <p className='lname'>LastName:  {res.lastName}</p>
       <p className='grade'>Grade :      {res.studGrade}</p>
      </div> 
      
      )
    })}
         
  </div>
  );
}

export default App;
