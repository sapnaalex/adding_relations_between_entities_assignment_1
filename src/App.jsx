import React from "react";
import DestinationContainer from "./components/DestinationContainer";
import './index.css';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin:"20px 0"}}>Top Travel Destinations</h1>
      <DestinationContainer/>
    </div>
  )
}

export default App