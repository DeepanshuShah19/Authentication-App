import './App.css';
import { useState } from 'react';
import HomePage from "./components/HomePage/HomePage"
import LoginRegestration from './components/Loginregestration';
function App() {
  return (
    <div className="container">
      <LoginRegestration />
      {/* <HomePage/> */}
      {/* <userProfile/> */}
    </div>
        
  );
}

export default App;
