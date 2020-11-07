import React from 'react';
import '../src/index.css';


const baseURL = "api.openweathermap.org/data/2.5/weather?q="

function App() {
  return (
    <div className="app">
     <main className="main">
       <div className="search-box">
         <input
         type = "text"
         className = "search-bar"
         placeholder = "Search...">
         </input>
       </div>
     </main>
    </div>
  );
}

export default App;
