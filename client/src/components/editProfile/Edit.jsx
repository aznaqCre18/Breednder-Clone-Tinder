import React, { useState } from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import './Edit.css';
import Addpet from './Addpet';



function Edit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span className="tombol-edit" onClick={handleShow}>
                EDIT
            </span>
            
            <Modal show={show} onHide={handleClose} className="payment-modal">
                <Card className="profilCard1">
                    <Container className="container-edit">
                        <Addpet />
                    </Container>
                    <div className="deks-scroll">
                        <Card.Body className="deks">
                            
                                <p className="breeder-edit">Name Pet</p>
                                <input type="text" className="input-breeder-name" placeholder="Name Pet"/>

                                <p className="breeder-edit">Breeder</p>
                                <input type="text" className="input-breeder-name" placeholder="Breeder"/>

                                <p className="breeder-edit">Gender</p>
                                <input type="text" className="input-breeder-name" placeholder="Gender"/>

                                <p className="breeder-edit">Age</p>
                                <input type="text" className="input-breeder-name" placeholder="Age"/>

                                <p className="breeder-edit">About Pet</p>
                                <textarea type="text" className="input-breeder-name-about" placeholder="About Pet"/>

                                <Button variant="danger" className="add-pet-card" onClick={handleClose}> 
                                    SAVE
                                </Button>

                        </Card.Body>
                    </div>                      
                </Card>
            </Modal>
        </>
    )

}

export default Edit;