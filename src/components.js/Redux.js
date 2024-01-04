import React from 'react';
import Inc from './Inc';
import { connect } from 'react-redux';

// Managing state values in multiple components at a time , using redux store
// state variable to store in global level
// Store --> Provider --> Components --> Actions --> Reducers --> Store  

function Redux({ count }) {
  return (
    <div>
      <center>
        Count from Redux Js Component : {count} <br /><hr />
        <Inc />
      </center>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state,   // Function that you would use to provide the store data to your component
})

export default  connect(mapStateToProps)(Redux);
