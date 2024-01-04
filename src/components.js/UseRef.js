import React, { useRef, useEffect } from 'react';

function UseRef() {
    const data = useRef(null);
    const count = useRef(0);

    const ref1 = useRef();
    const ref2 = useRef(2021);
    console.log("render");
    console.log(ref1, ref2);

    const submiHandler = (e) => {
        e.preventDefault();
        console.log(data.current.value, count);
        // data.current.value = 'sulthan';
        // data.current.value + 1;
    }

    useEffect(() => {
        data.current.focus();
        count.current += 1;
        console.log('Render count:', count.current);
    }, []);

    return (
        <div>
            <center>
                <h2>The useRef Hook allows you to persist values between renders{ref1.current}</h2><br />
                <h2>Does Not Cause Re-renders{ref2.current}</h2>
                <form onSubmit={submiHandler}>
                    <input ref={data} type="text" placeholder="Enter your name" /><br />
                    <input type='submit' />
                </form>
            </center>
        </div>
    )
}

export default UseRef
