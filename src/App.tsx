import React, { useState, useEffect } from "react";
import socketIOClient from 'socket.io-client';
import './App.css';
const ENDPOINT = "http://localhost:4001";

function App() {
  const [response, setResponse] = useState("");
  const [serial, setSerial] = useState('serial2')

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    socket.on("FromAPI2", data => {
      setSerial(data);
    });
  }, []);

  return (
    <div>
      <h1>Serial 1</h1>
      <p>
      {response}
      </p>
      <h1>Serial 2</h1>
      <p>{serial}</p>
    </div>

  );
}

export default App;
