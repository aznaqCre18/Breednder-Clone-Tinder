import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Image, Card } from 'react-bootstrap';
import './../menuUtama/menuUtama.css';
import './profile.css';
import { Link } from 'react-router-dom';
import MyComponent from './slider';
import { Form, Button } from 'react-bootstrap';
import Payment from '../../components/payment/payment';
import Edit from '../../components/editProfile/Edit';
import Data from '../../components/data/data';
import {getSpesies} from '../../_action/spesiesA'; 
import {connect} from 'react-redux'
import {getUser} from '../../_action/petA';

const profil = Data.profile;


class Profile extends Component {

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        const {data} = this.props.petR
        console.log('Buka coba',data)
        return (
            <div className="background1">
                <Container>
                    <Row>
                        <Col className="kiri2" sm={4}>
                                    <>
                                        <Navbar bg="danger" variant="dark" className="navBack">
                                            <Navbar.Brand>
                                                <Image className="profile2" src={require("./dua.jpg")} />
                                                <h1 className="petProfile">Profile Pet</h1>
                                                <Link to="/MenuUtama">
                                                    <Image className="backBtn" src={require("../../img/list/down-arrow.png")} />
                                                </Link>
                                            </Navbar.Brand>
                                        </Navbar>
                                        <div className="accountSet">Account Settings</div>
                                        <div className="accountSet a">
                                            <p className="email">Email</p>
                                        {data.map((isi, index) => {
                                            return (
                                            <p className="isiEmail">{isi.user.email}</p>
                                            )
                                        })}
                                        </div>
                                        <div className="accountSet a">
                                            <p className="phn">Phone</p>
                                            <p className="isiPhn">08997775669</p>
                                        </div>
                                    </>
                            <div className="accountSet disc">Discovery Settings</div>
                            <div className="discovery">
                                <div className="tittleDistance">Maximum Distance <span className="jarak">10 Km</span></div>
                                <div className="move">
                                    <MyComponent className="slidde" />
                                </div>
                                <div className="tittleAge">Age</div>
                                <Form.Group className="formGrup" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control as="select">
                                        <option>Child</option>
                                        <option>Teeneger</option>
                                        <option>Adult</option>
                                    </Form.Control>
                                </Form.Group>
                                <div className="tittleAge dua">Species</div>
                                <Form.Group className="formGrup" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control as="select">
                                        <option>Cat</option>
                                        <option>Dog</option>
                                        <option>Rabit</option>
                                        <option>Bird</option>
                                        <option>Sugar Glider</option>
                                        <option>Fish</option>
                                    </Form.Control>
                                </Form.Group>
                                <Link to="/">
                                    <Button className="logout" variant="danger" size="md" >
                                        Logout
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="kanan">
                                <Card className="profilCard">
                                    <div className="deksTeks">
                                        {profil.map(isi => {
                                            return (
                                                <>
                                                    <Card.Img variant="top" src={isi.pict} className="foto" />
                                                    <Card.Body className="deks">
                                                        <div className="deksInner">
                                                            <Card.Title className="isiProfilTittle">{isi.name}</Card.Title>
                                                            <Card.Text>
                                                                <Image className="breederIcon" src={require("../../img/list/breeder-black.png")} /> <span className="isiProfil">Breeder : {isi.breeder}</span><br />
                                                                <Image className="breederIcon" src={require("../../img/list/loc-black.png")} /> <span className="isiProfil">{isi.jarak}</span><br />
                                                                <Image className="breederIcon" src={require("../../img/list/gender.png")} /> <span className="isiProfil">{isi.gender} - {isi.age}</span><br />
                                                                <Image className="breederIcon" src={require("../../img/list/call.png")} /> <span className="isiProfil">Phone Breeder : {isi.phone}</span><br />
                                                            </Card.Text>
                                                            <Card.Title className="isiProfilTittle">About Pet</Card.Title>
                                                            <Card.Text className="description">
                                                                {isi.about}
                                                            </Card.Text>
                                                        </div>
                                                        <div className="spesi">{isi.jenisHewan}</div>
                                                    </Card.Body>
                                                </>
                                            )
                                        })}
                                    </div>
                                    {/* <Edit className="editInner">
                                            EDIT
                                        </Edit> */}
                                    <Edit />
                                </Card>

                                {/* <div className="pro">
                                    <p>Add Pet</p> 
                                </div> */}
                                <div className="apaBae">
                                    <Payment />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log("species",state)
    return {
        petR: state.petR,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUser: (data) => dispatch(getUser(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);