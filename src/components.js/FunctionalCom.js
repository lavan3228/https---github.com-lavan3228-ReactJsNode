import React, { useState } from 'react';

const FunctionalCom = () => {
    const [name, setName] = useState("Lavankumar");
    return (
        <div>
            <h4>This is {name}</h4>
        </div>
    )
}

export default FunctionalCom
