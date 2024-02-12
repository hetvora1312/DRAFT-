import React from 'react';
import {FloatingLabel , Form} from 'react-bootstrap';


function FormFloatingBasicExample() {
  return (
    <>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>


      
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  );
}

export default FormFloatingBasicExample;