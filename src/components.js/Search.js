import React, { useState } from 'react';
import Data from '../city.json';

function Search() {
    const [search, setSearch] = useState("");
    return (
        <div>
            <center>
                <h1>Hello Search</h1>
                <h3>Enter Your City: </h3>
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} /><br />
                {Data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item => {
                   return <div style={{border:"1px solid black", padding:'10px', margin:'10px', maxWidth:'70%'}}>
                        {item.name}
                    </div>
                })}
            </center>
        </div>
    )
}

export default Search