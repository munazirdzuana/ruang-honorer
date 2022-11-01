import React, { useState } from "react";
import { Card, Container, Row, Col, Button,Form,Alert} from "react-bootstrap";
import logo from '../asset/logo.png'
import Formulir from "../componen/form/Formulir";

const Login = () =>{
    const [show,setShow]=useState(true)
    const [alt,sAlt]=useState(false)
    const login= <Card.Body className='p-5 w-200 d-flex flex-column '>
                    <img src={logo} className='mx-5' alt="LOGO"/>
                    <h4 className="fw-bold text-center mt-2 d-hidden">LOGIN</h4>
                    {alt?<Alert variant="info" onClose={() => sAlt(false)} dismissible >
                        This is a alert—check it out!
                    </Alert>:null}
                    <hr className="mb-4" />
                        <Form>
                            <Formulir title="Email" tipe="email" iD="email" Text="We'll never share your email with anyone else."/>   
                            <Formulir title="Password" tipe="password" iD="pass" Text=""/>
                            <Form.Group className="mb-2">
                                <Form.Check type="checkbox" iD="chek" label="Remember Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" href="/profil">
                                Submit
                            </Button>
                        </Form>
                    <hr className="mb-4" />
                    <div>
                        <p className="mb-3 pb-lg-2"><a class="text-reset fw-bold" href="#!" onClick={()=>setShow(!show)}>Forgot password?</a></p>
                        <p className="mb-0">Don't have an account? <a href="/Singup" className="text-reset fw-bold text-decoration-none ">Sign Up</a></p>
                    </div>
                </Card.Body>

    const forgot=<Card.Body className='p-5 w-200 d-flex flex-column '>
                    <img src={logo} className='mx-5' alt="LOGO"/>
                        <h4 className="fw-bold text-center mt-2 d-hidden">Forgot Password</h4>
                        <hr/>
                        <p class="mt-3 text-gray-600 font-semibold">Please enter the email address you used to create your account,and we will send you a link to reset your password.</p> 
                        <hr/>
                        <Form>
                        <Formulir title="Email" tipe="email"/>
                        <Button variant="primary" type="submit" onClick={()=>{sAlt(true);setShow(!show)}}>Submit</Button>
                        </Form>
                        <hr className="mb-4" />
                    <div>
                        <p className="mb-3 pb-lg-2"><a class="text-reset fw-bold" href="#!" onClick={()=>setShow(!show)}>Login</a></p>
                        <p className="mb-0">Don't have an account? <a href="/Singup" className="text-reset fw-bold text-decoration-none ">Sign Up</a></p>
                    </div>

    </Card.Body>
    return (
        <div>
            <Container fluid className="bd"> 
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col col='12'>
                    <Card className="bg-white my-5 mx-auto sh"style={{borderRadius: '1rem', maxWidth: '400px'}}>
                        {
                            show?login:forgot
                        }

                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Login;