import React from 'react'
import { useHistory } from 'react-router-dom'

const UseHistory = () => { // this is only for functional components - Redirect to another page
    let history = useHistory();
    return (
        <div>
            <h4>
                This is a useHistory Page
            </h4>
            <button onClick={() => history.push('/about')}>Move</button>
        </div>
    )
}

export default UseHistory
