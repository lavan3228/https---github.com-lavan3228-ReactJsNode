import React, { useState } from 'react'

function Onchange() {
    const [user, setUser] = useState("");

    // taking user info from user, and saved to variable

    const handler = e => {
        setUser(e.target.value)
    }
    return (
        <div>
            <center>
                <input type='text' placeholder='username' value={user} name='user'
                    onChange={handler}
                /><br />
                <h2>{user}</h2>
            </center>
        </div>
    )
}

export default Onchange
