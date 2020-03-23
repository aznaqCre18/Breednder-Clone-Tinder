import React, {Component} from 'react';
import { Button, Modal, ButtonToolbar, Form } from 'react-bootstrap';
import './login.css';
//import MenuUtama from './../../../container/menuUtama/menuUtama';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {login} from './../../../_action/loginA'
// import axios from 'axios';
// import { setUserSession } from './Utils/Common';


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password: '',
            emailErr: '',
            passwordErr: '',
            show : false
        }
    }

    handleModal() {
        this.setState(
            { show: !this.state.show }
            );
        }

    emailOnChange = (event) => {
        this.setState({
            email: event.target.value
        },() => this.validateEmail(this.state.email))
    }

    passwordOnChange = (event) => {
        this.setState({
            password: event.target.value
        }, () => this.validatePassword(this.state.password))
    }

    validatePassword = (pass) => {
        if (pass.length >= 4) {
            this.setState({
                passwordErr : ''
            })
        }else if(pass.length == 0) {
            this.setState({
                passwordErr: 'Harap masukan password anda'
            })
        }
        else {
            this.setState({
                passwordErr : 'Masukan setidaknya 4 karakter'
            })
        }
    }

    validateEmail = (mail) => {

        //menggunakan regular expression
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            this.setState({
                emailErr:''
            })
        }else{
            this.setState({
                emailErr: 'Mohon masukan email dengan format yang tepat...'
            })
        }
    }

    handleLogin = (event) => {
        event.preventDefault()
        let dataLogin = {
            email: event.target.elements.email.value,
            password: event.target.elements.password.value
        }
        this.props.login(dataLogin)
    }
    
    render() {
        const {data, dataError, error} = this.props.loginR
        return (
        <>

            <Button
                onClick={() => {
                this.handleModal();
                }}
                className="btnLogin login"
                variant="light"
                size="lg"
            >
                Login
            </Button>

            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal"
                show={this.state.show}
                onHide={() => this.handleModal()}
            >
                <Modal.Header closeButton>
                {data.token != null ? <Redirect to="/menuUtama" /> : null }
                <h1 className="txtModalHeader">Login</h1>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={this.handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={this.emailOnChange} name="email" autoComplete="off"/>
                    <p>{this.state.emailErr}</p>
                    </Form.Group>   
                    <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={this.passwordOnChange} name="password" />
                    <p>{this.state.passwordErr}</p>
                    {error ? <p style={{color: "red",fontSize: "12px"}}>{dataError.message}</p> : null}
                    </Form.Group>
                    <Button className="btn-block" variant="outline-info" type="submit">
                    Login
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
        </>
        );
    }
}

const mapStateToProps = state => {
    // console.log('DATA REDUX',state)
    return {
        loginR: state.loginR
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(login(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);