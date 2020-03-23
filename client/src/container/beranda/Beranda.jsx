import  React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
//import Login from './../../components/modals/login';
import './Beranda.css';
import App from '../../components/modals/login/login';
import Register from '../../components/modals/register/register';
//import { Redirect } from 'react-router-dom';

class Beranda extends Component {
    
    render() {
        return(     
        <div className="background">
            <div className="appHeader">
                
                <Container>
                    <Row>
                        <Col><h1 className="headName">BreedNeer</h1></Col>
                        <Col sm={8}></Col>
                        <Col>
                            <App className="login"/>
                        </Col>
                    </Row>
                </Container>
                
                <p className="slogan"> Swipe <span style={{fontWeight: "bold"}}>right.</span><br/>Make your pet <span style={{fontWeight: "bold"}}>happy</span></p>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col md={6}> <p className="terms">by clicking enter, you agree to <span className="isiTerms">our terms</span>. Learn how we process your data in our <span className="isiTerms">Privacy Policy</span> and <span className="isiTerms">Cookie Policy.</span></p> </Col>
                        <Col></Col>
                    </Row>
                    
                </Container>
                <Register />
                <div className="footer">
                    <h1>FIND YOUR PET'S MATCH</h1>
                </div>
            </div>
        </div>
        )
    }
}
export default Beranda;