import React, { useState } from 'react';
import Axios from 'axios';
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleDob = (e) => {
    setDob(e.target.value);
  }

  const handleClick = () => {
      Axios.post('/users', { id, name, dob })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    };

  return (
    <div className='App'>
      <div>
        <ul>
          <li> ID는 <input className="writeInput" type="text" onChange={handleId} /> 입니다.</li>
          <li> 이름은 <input className="writeInput" type="text" onChange={handleName} />입니다.</li>
          <li> 등록날짜는 <input className="writeInput" type="text" onChange={handleDob} />입니다. </li>
        </ul>
        <input type="button" value="제출하기" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;