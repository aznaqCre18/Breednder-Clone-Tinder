import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import './Edit.css';

const AddCard = () => {
    return(
    <>
        <Row>
            <Col>
                <div className="child-edit1">
                    <Image src={require("../../img/list/dua.jpg")} className="child-edit-image"/>
                    <div className="parrent-plus">
                        <Image className="plus-isi" src={require("../../img/plus.png")}/>
                    </div>
                </div>
            </Col>
            <Col><div className="child-edit"><div className="parrent-plus"><Image className="plus" src={require("../../img/plus.png")}/></div></div></Col>
            <Col><div className="child-edit"><div className="parrent-plus"><Image className="plus" src={require("../../img/plus.png")}/></div></div></Col>
        </Row>
        <Row>
            <Col><div className="child-edit"><div className="parrent-plus"><Image className="plus" src={require("../../img/plus.png")}/></div></div></Col>
            <Col><div className="child-edit"><div className="parrent-plus"><Image className="plus" src={require("../../img/plus.png")}/></div></div></Col>
            <Col><div className="child-edit"><div className="parrent-plus"><Image className="plus" src={require("../../img/plus.png")}/></div></div></Col>
        </Row>
        <Row>
            <Col><div className="child-edit"><div className="parrent-plus"><Image className="plus" src={require("../../img/plus.png")}/></div></div></Col>
            <Col><div className="child-edit"><div className="parrent-plus"><Image className="plus" src={require("../../img/plus.png")}/></div></div></Col>
            <Col><div className="child-edit"><div className="parrent-plus"><Image className="plus" src={require("../../img/plus.png")}/></div></div></Col>
        </Row>
    </>
    )
}

export default AddCard;