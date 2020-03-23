import  React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import './register.css';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

import {getSpesies} from '../../../_action/spesiesA'   
import {register} from '../../../_action/registerA' 
//import { Component } from 'react';

class Register extends Component {

    componentDidMount() {
        this.props.getSpesies()
    }
    
        
        constructor(props){
            super(props)
            this.state = {
                show: false,
                breeder: '',
                email: '',
                password: '',
                phone: '',
                address: '',
                name: '',
                gender: '',
                spesies: 0, 
                age: ''
                }
            }

        handleRegister = (e) => {
            e.preventDefault();
            const data = {
                breeder: this.state.breeder,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                address: this.state.address,
                pet: {
                    name: this.state.name,
                    gender: this.state.gender,
                    spesies: {
                        id: this.state.spesies
                    },
                    age: this.state.age
                }
            }
            console.log(data)
            this.props.register(data)
        }

        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleShow = () => {
            this.setState({
                show: !this.state.show
            })
        }

        // onClick={data.token != null ? <Redirect to="/menuUtama" /> : null }
        // handleClick = () => {
        //     this.setState({
        //         isLogin : true
        //     })
            
            //this.state.isLogin == true && data.token != null ? <Redirect to="/menuUtama" /> : null 
            // if(this.state.isLogin == true ) {
            //     <Redirect to="/menuUtama" />
            // }
        // 
        


    render(){
        
        const {data, isLoading, error } = this.props.spesiesR
        const {isLogin} = this.props.registerR
        console.log("sadasd ", data.data)  
        
        
        //const token = localStorage.getItem('token')   
                return (
            <>
                <Button variant="light" className="register" onClick={this.handleShow}>
                REGISTER
                </Button>
                    
                <Modal show={this.state.show} onHide={this.handleShow} size="md">
                <div className="close" onClick={this.handleShow}>x</div>
                    <Modal.Body>
                        {isLogin ? <Redirect to="/menuUtama" /> : null }
                        {/* {data.token != null ? <RedirisLogect to="/menuUtama" /> : null } */}
                        <h1 className="judul">REGISTER</h1>
                    <form action="" onSubmit={this.handleRegister}>
                        <input type="text" className="breeder" placeholder="Breeder" name="breeder" onChange={e => this.setState({breeder: e.target.value})}/>
                        <br/>
                        <input type="text" className="email1" placeholder="Email" name="email" onChange={e => this.setState({email: e.target.value})}/>
                        <br/>
                        <input type="password" className="password" placeholder="Password" name="password" onChange={e => this.setState({password: e.target.value})}/>
                        <br/>
                        <input type="text" className="number" placeholder="Phone Number" name="phone" onChange={e => this.setState({phone: e.target.value})}/>
                        <br/>
                        <input type="text" className="number" placeholder="Address" name="address" onChange={e => this.setState({address: e.target.value})}/>
                        <br/>
                        <input type="text" className="namePet" placeholder="Name Pet" name="pet" onChange={e => this.setState({name: e.target.value})}/>
                        <br/>
                        <input type="text" className="gender" placeholder="Gender Pet" name="gender" onChange={e => this.setState({gender: e.target.value})}/>
                        <br/>

            
                        <Form.Group controlId="formSpeciesPet">
                            <Form.Control as="select" className="species" onChange={e => this.setState({spesies: e.target.value})}>
                                <option value="" selected disable>
                                Species Pet
                                </option>
                                {data.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <input type="text" className="age" placeholder="Age Pet" onChange={e => this.setState({age: e.target.value})}/>
                        <br/>
                        {/* <Link to="/MenuUtama"> */}
                            <Button type="submit" variant="danger" className="tombolRegister" >REGISTER</Button>
                            
                        {/* //</Link> */}
                        </form>
                    </Modal.Body>
                </Modal>
            </>
            );
        }
    }


const mapStateToProps = state => {
    console.log("species",state)
    return {
        spesiesR: state.spesiesR,
        registerR: state.registerR
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getSpesies: () => dispatch(getSpesies()),
        register: data => dispatch(register(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);