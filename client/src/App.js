import logo from './logo.svg';
import React, { useState, useEffect } from "react";

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/api/getDoctores",
    {method: "GET",})
      .then((res) => res.json())
      .then((data) => {console.log('console from data',data);setMessage(data.result.doctores)});
  }, []);

  return (
    <React.StrictMode>
    <div className="App">
      { message? message.map(x=><h1 key={x.id}>{x.nombres}/{x.apellidos}</h1>) :<h1>Nothing</h1>}
    </div>
    </React.StrictMode>

  );
}


export default App;
