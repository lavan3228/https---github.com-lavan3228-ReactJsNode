import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import ReactLogo from '../Screenshot.png';
import AudioFile from '../music.mp3';
import VideoFile from '../video.mp4';
// this is for both class and functional components  - Redirect to another page
// use history also same - but only for functional components - Redirect to another page
const HomeRedirect = () => {
    const [auth, setAuth] = useState(false)
    if (auth) {
        return < Redirect to='/dashboard' /> //  this is for both class and functional components
    }


    return (
        <div>
            <center>
                <h1>Welcome to Home Page !!</h1>
                {/* <img src={ReactLogo} height='250' width='auto' /><br />
                <audio controls>
                    <source src={AudioFile} type='audio/ogg' />
                </audio><br />
                <video width='320' height='250' controls>
                    <source src={VideoFile} type='video/mp4' />
                </video><br /> */}
                <button onClick={() => setAuth(true)}>Loginn</button>
            </center>
        </div>
    )
}

export default HomeRedirect
