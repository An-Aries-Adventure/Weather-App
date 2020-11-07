import React from 'react';
import '../src/index.css';


const baseURL = "api.openweathermap.org/data/2.5/weather?q="

function App() {

const dateBuilder = (d) => {
 let months = ["January", "February", "March", "April", "May", "June", "July", 
 "August", "September", "October", "November", "December"];
 let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear()

return `${day} ${date} ${month} ${year}`
}


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
       <div className = "location-box">
        <div className = "location">Jacksonville</div>
        <div className = "date">{dateBuilder(new Date())}</div>
       </div>
     </main>
    </div>
  );
}

export default App;
