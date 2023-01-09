import React from "react";
import NavigationBar from "../componen/Navbarr/NavigationBar";
import { Card, Col, Row, Container, Form, Button, ListGroup, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Singup = () => {
    const [nik, setNik] = useState("");
    const [city, setCity] = useState("");
    const [nama, setNama] = useState("");
    const [msg, setMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const navigate = useNavigate();

    const addUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name: nama,
                email: email,
                password: password,
                confPassword: confPassword,
                role: "user",
                nik: nik,
                desc: "",
                city: city,
                time: 0,
                saldo: 0
            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };


    return (
        <div>
            <NavigationBar page="Singup" />
            <Container fluid className="bd mt-5">
                <Row className="row d-flex justify-content-lg-center align-items-center">
                    <Form onSubmit={addUser}>
                        <Card className="bg-white my-5 mx-auto d-flex flex-row" style={{ borderRadius: '1rem', maxWidth: '1140px' }}>
                            <Card.Body className='p-5 flex-column'>
                                <Row>
                                    <Col lg={8}>
                                        <h4 className="fw-bold mt-2 ">Registrasi</h4>
                                        <hr className="mb-4" />
                                        <p>{msg}</p>
                                        <Form.Group className="mb-3" controlId="nik" >
                                            <Form.Label>NIK</Form.Label>
                                            <Form.Control type="text" placeholder="Masukan text" value={nik}
                                                onChange={(e) => setNik(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="nama" >
                                            <Form.Label>Nama</Form.Label>
                                            <Form.Control type="text" placeholder="Masukan Nama" value={nama}
                                                onChange={(e) => setNama(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="kota" >
                                            <Form.Label>Asal Kota</Form.Label>
                                            <Form.Control type="text" placeholder="Masukan Kota" value={city}
                                                onChange={(e) => setCity(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email" >
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Masukan Email" value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                            <Form.Text className="text-muted">
                                                "We'll never share your email with anyone else."
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password" >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Masukan Password" value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="confPassword" >
                                            <Form.Label>Ulang Password</Form.Label>
                                            <Form.Control type="password" placeholder="ulangi Password" value={confPassword}
                                                onChange={(e) => setConfPassword(e.target.value)} />
                                        </Form.Group>
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
                                        <Form.Check type="checkbox" label="Setuju dengan terms" className="mb-4" />
                                        <Button variant="primary" type="submit">
                                            Daftar
                                        </Button>
                                    </Col>

                                </Row>
                                <hr className="mb-4" />
                                <div>
                                    <p className="mb-0">Did you have an account? <a href="/Login" className="text-reset fw-bold text-decoration-none "> Login</a></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Form>
                </Row>
            </Container>
        </div >
    )
};

export default Singup;