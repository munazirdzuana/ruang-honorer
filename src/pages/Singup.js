import React from "react";
import NavigationBar from "../componen/Navbarr/NavigationBar";
import { Card, Col, Row, Container, Form, Button, ListGroup} from "react-bootstrap";
import Formulir from "../componen/form/Formulir";

const Singup = () =>{
    return (
        <div>
            <NavigationBar page="Singup"/>
            <Container fluid className="bd mt-5">  
                <Row className="row d-flex justify-content-lg-center align-items-center">
                    <Card className="bg-white my-5 mx-auto d-flex flex-row"style={{borderRadius: '1rem', maxWidth: '1140px'}}>
                    <Card.Body className='p-5 flex-column'>
                        <Row>
                            <Col lg={8}>
                            <h4 className="fw-bold mt-2 ">Registrasi</h4>
                            <hr className="mb-4" />
                            <Form>
                                <Formulir title="NIK" tipe="text" Text=""/>
                                <Formulir title="Name" tipe="text" Text=""/>
                                <Formulir title="Email" tipe="email" Text="We'll never share your email with anyone else."/> 
                                <Formulir title="Password" tipe="password" Text=""/>
                                <Formulir title="ulang Password" tipe="password" Text=""/>
                                <Formulir title="NoHp" tipe="tel" Text=""/>
                                
                            </Form>
                            </Col>
                            <Col lg={4} className="border-left">
                            <h4 className="fw-bold text-center mt-2 ">Terms</h4>
                            <hr className="mb-4" />
                            <ListGroup as="ol" numbered>
                                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                            </ListGroup>
                            <hr className="my-4" />
                            <Form.Check type="checkbox" label="Setuju dengan terms" className="mb-4"/>
                            <Button variant="primary" type="submit">
                                    SUBMIT
                            </Button>
                            </Col>
                        </Row>
                        <hr className="mb-4" />
                            <div>
                            <p className="mb-0">Did you have an account? <a href="/Login" className="text-reset fw-bold text-decoration-none "> Login</a></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
};

export default Singup;