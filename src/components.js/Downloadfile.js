import React from 'react'
import Thumbnail from '../Screenshot.png';

const Downloadfile = () => {
  return (
    <div>
      <center>
        <img src = {Thumbnail} alt = 'thumbnail' height='250' width='450' /><br/><br/>
        <a href= {Thumbnail} className='btn btn-primary' download='thumbnail'>Click here to download</a>
      </center>
    </div>
  )
}

export default Downloadfile;
