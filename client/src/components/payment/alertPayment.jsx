import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertPayment(props) {

  // onClose={() => setShow(false)}
  console.log(props)
  return (
    <Alert variant="success" onClose={()=>{props.setShow(false)}} dismissible show={props.show}>
      <Alert.Heading>Terimakasih silahkan tunggu konfirmasi pembayaran...</Alert.Heading>
    </Alert>
  );

  // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
export default AlertPayment;