import React from 'react';
import '../my-sass.scss'; // css pre-processor
import '../App.css'; // .css file
import styles from '../my-style.module.css'; // CSS Modules                                                                                                                                     

const Sass = () => {
    return (
        <div>
            <h1>Sass is a CSS pre-processor.</h1>
            <p>Add a little style!.</p>
            <p>Create a variable to define the color of the text</p>
            <h2 className='new'>You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application</h2>
            <h3 className={styles.bigblue}>Another way of adding styles to your application is to use CSS Modules</h3>                              
        </div>
    )
}

export default Sass
