import { green } from '@material-ui/core/colors';
import React from 'react';
// import '../App.css';

function Style() {

  const styling = {
    backgroundColor: "skyblue"
  }
  return (
    <div className="container" style={{margin: "10px"}}>
        <h6 style={{color: "green", ...styling}}>this is App.css styling</h6>
    </div>
  )
}

export default Style