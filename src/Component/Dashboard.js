import React, { useState } from 'react';

const Dashboard = () => {
    const userDataString = JSON.parse(localStorage.getItem('userData'));
    // Web storage mechanisms like localStorage or sessionStorage store data as strings.
    //  When you retrieve JSON data from localStorage, you need JSON.parse
    //  to convert it back into an object for further use.
    const[task , setTask]=useState("");
    const[newtask , setNewTask]=useState("");

 
  return (
    <div>
      <h1>Welcome to the Dashboard {userDataString.username} </h1>
      
    </div>
  );
};

export default Dashboard;

