import React from "react";
import Navbar from 'react-bootstrap/Navbar';


var today = new Date();
var currentDate =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

function CurrentDate() {
  return <Navbar.Brand href="" className="mx-4"><h1>{currentDate}</h1></Navbar.Brand>;
}

export default CurrentDate;
