import React from 'react'
import { increase, decrease } from './Action';
import { connect } from 'react-redux';

function Inc({ count, increase, decrease }) {
    return (
        <div>
            Count From Inc Component : {count} <br /><br />
            <button onClick={() => increase()}>Increment</button>
            <button onClick={() => decrease()}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state,   // Function that you would use to provide the store data to your component
})

const mapDispatchToProps = (dispatch) => {  // is use to provide the action creators as props to your component
    return {
        // dispatching plain actions
        increase: () => dispatch({ type: 'INCREMENT' }),
        decrease: () => dispatch({ type: 'DECREMENT' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inc);
