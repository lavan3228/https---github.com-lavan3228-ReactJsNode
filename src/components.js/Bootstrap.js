import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Bootstrap = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, World</h1>
        <p>this is a simple hero unit, this is a simple hero unit,
          this is a simple hero unit,
          this is a simple hero unit
        </p>
        <p>
          <Button variant='primary'>Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Bootstrap;
