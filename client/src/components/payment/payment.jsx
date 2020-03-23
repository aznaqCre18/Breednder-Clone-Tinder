import React, { useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import './../../container/profile/profile.css';
import AlertPayment from './alertPayment';
import './payment.css';

function Payment() {
    const [show, setShow] = useState(false);

    const [alertPay, setAlertPay] = useState(false)

    const handleClose = () => {
        setShow(false);
        setAlertPay(true)
    }
    const handleShow = () => setShow(true);
    //const handleShow2 = () => setShow(true);




    return (
        <div className="ibu">
            <Button variant="danger" onClick={handleShow}>
                Add Pet
                </Button>

            <Modal show={show} onHide={handleClose} className="payment-modal">
                <Modal.Body className="payment-body">
                    <h1>P R E M I U M</h1>
                    <h3>Upgrade BreedNder mu dan nikmati<br />fitur-fitur PRO.</h3>
                    <h4>BreedNder : 0981312323</h4>

                    <input type="text" className="no-rek" /> <br />

                    <Image src={require("../../img/list/upload.png")} className="payment-foto" />
                    <h2 className="payment-foto-navigate">Upload Bukti Transfer</h2>
                    <div className="bukti-payment"></div>
                </Modal.Body>
                <Button className="button-payment" variant="light" onClick={handleClose}>
                    KIRIM
                </Button>
                <div className="close" onClick={handleClose}>x</div>
            </Modal>

            <div className="alert-pay">
                <AlertPayment show={alertPay} setShow={setAlertPay} />
            </div>


        </div>
    );
}

export default Payment;
