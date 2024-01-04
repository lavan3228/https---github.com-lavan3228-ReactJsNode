import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            res => res.json()
        ).then(resu => setData(resu))
    }, []);

    return (
        <div>
            <center>
                {data.map(item => <li key={item.id}>{item.title}</li>)}
            </center>
        </div>
    )
}

export default Fetch