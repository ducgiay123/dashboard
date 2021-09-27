import React from 'react';
import Sidebar from "./components/sideBar/Sidebar";
import Topbar from "./components/Topbar.jsx/Topbar";
import Home from "./pages/Home";
import "./app.css";



function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
