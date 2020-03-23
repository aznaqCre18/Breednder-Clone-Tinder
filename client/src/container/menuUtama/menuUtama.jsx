import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Image, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import './menuUtama.css';
import Galeri from './../../components/galeri/Galeri';
import { Link } from 'react-router-dom';
import Data from '../../components/data/data';
import Deck from '../../components/Deck';
import {connect} from 'react-redux';
import {getUser} from '../../_action/petA';

const data = Data.profile;

class MenuUtama extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         refresh :false,
    //         like : false,
    //         dislike : false,
    //         auto : false
    //     }
    // }


    // handleRefresh = () => {
    //     this.setState = {
    //         refresh :true,
    //         like : false,
    //         dislike : false,
    //         auto : false
    //     }
    // }

    
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        const {data} = this.props.petR
        console.log('Thisis', data)
        return (
            <div className="background1">
                {/* {data.map((isi, index) => {} */}
                    return (
                        <>
                            <Container >
                                <Row>
                                    <Col className="kiri1 kiri2" sm={4}>
                                        <Navbar bg="danger" variant="dark" className="navBack">
                                            <Navbar.Brand>
                                                
                                                    <Link to="/Profile">
                                                        <Image className="profile" src={require("./dua.jpg")}/>
                                                    </Link>

                                                    {/* <DropdownButton>
                                                        <h1 className="pet">{isi.name}<Image className="arrow" src={require("../../img/list/down-arrow.png")} /></h1>
                                                    </DropdownButton> */}

                                                        <DropdownButton id="dropdown-basic-button" className="pet" onSelect variant="danger" title="Select Pet">
                                                            {data.map((item, index) => {
                                                                return(
                                                                        <Dropdown.Item>{item.name}</Dropdown.Item>
                                                                )
                                                            })}
                                                        </DropdownButton>
                                                
                                                
                                            </Navbar.Brand>
                                        </Navbar>
                                        
                                        <div className="navBar">
                                            <p>MATCH</p>
                                        </div>
                                        <div className="garis"></div>
                                        <div className="scrol">
                                            <div className="scrol-in">
                                                <Galeri />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={8}>
                                        <div className="kanan">

                                            <div id="slide">
                                                <Deck />
                                            </div>
                                            
                                                <div className="prarent-bungkus">
                                                    <div className="bungkus1" onClick={this.handleRefresh}>
                                                        <Image src={require("../../img/list/refresh.png")} className="refresh"></Image>
                                                    </div>
                                                    <div className="bungkus2">
                                                        <Image src={require("../../img/list/dislike.png")} className="dislike"></Image>
                                                    </div>
                                                    <div className="bungkus3">
                                                        <Image src={require("../../img/list/like.png")} className="like"></Image>
                                                    </div>
                                                    <div className="bungkus4">
                                                        <Image src={require("../../img/list/reshuffel.png")} className="reshuffel"></Image>
                                                    </div>
                                                </div>
                                            <Row className="menuButton">
                                                <Col sm={2} className="kolomMenu">
                                                    <div className="hideBtn">HIDE</div>
                                                </Col>
                                                <Col sm={2} className="kolomMenu">
                                                    <Image src={require("../../img/list/left.png")} className="leftButton" /> <span className="no">NO</span>
                                                </Col>
                                                <Col sm={2} className="kolomMenu">
                                                    <Image src={require("../../img/list/left.png")} className="rightButton" /> <span className="no ya">YES</span>
                                                </Col>
                                                <Col sm={2} className="kolomMenu">
                                                    <Image src={require("../../img/list/left.png")} className="openButton" /> <div className="noOpen">OPEN<br />PROFILE</div>
                                                </Col>
                                                <Col sm={2} className="kolomMenu">
                                                    <Image src={require("../../img/list/left.png")} className="closeButton" /> <div className="noOpen">CLOSE<br />PROFILE</div>
                                                </Col>
                                                <Col sm={2} className="kolomMenu">
                                                    <input type="text" className="input" /> <div className="next">NEXT<br />PHOTO</div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                })

            </div>
        );
    }

}
const mapStateToProps = (state) =>{
    console.log('mapStateToProps From List IMage',state)
    return{
        petR : state.petR
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser : (data)=> dispatch( getUser(data) ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuUtama)