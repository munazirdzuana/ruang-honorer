import React, { useState } from "react";
import { Accordion, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import NavigationBar from "../componen/Navbarr/NavigationBar";
import pic from "../asset/mavatar.svg"
import lock from"../asset/geo.svg"
import clock from"../asset/clock-history.svg"
import mail from "../asset/mailbox.svg"

const Profile = () =>{
    const [fom,setFom]=useState(true)
        return (
        <div className="bgp">
            <NavigationBar page="Profile"/>
            <div className="pt-5">
                <Container><Form>
                    <Row className="d-flex mt-4 mb-3">
                        <div className="d-grid gap-1 p-2 d-flex justify-content-end">
                            <Button variant="outline-dark" onClick={()=>setFom(!fom)}>{fom?<>edit</>:<>simpan</>}</Button>
                        </div>
                        <Col md={3} className="d-flex justify-content-center align-items-start">
                            <div className="profil">
                                <img src={pic} alt="profile" className="rounded-circle img-fluid p-2"/>
                                {fom?null:<Form.Control type="file" />}
                            </div>
                        </Col >
                        <Col md={9} className="ps-4">
                            
                            <div>
                                <h1><Form.Control size="lg" plaintext={fom} readOnly={fom} defaultValue="Munsxir" /></h1>
                                <div>
                                <p><span className="pe-2"><img src={lock} alt="lokasi"/> : Bandung</span> 
                                <span className="px-2"><img src={mail} alt="mail"/> : munazir@mail</span>
                                <span className="px-2"><img src={clock} alt="waktu"/> : 500 jam</span>
                                <span className="px-2"> # : 7162931</span>
                                </p>
                                </div>
                            </div>
                            <hr/>
                            <div className="ps-3">
                                <div>
                                    About Me
                                </div>
                                <div className="px-3">
                                <p><Form.Control className="max-fom" plaintext={fom} readOnly={fom} defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" as="textarea" rows={3} /></p>
                                    <p></p>
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-between border align-items-center rounded-pill bg-light h-30 border-secondary">
                                <div className="p-3 fw-bold">Rp. <span>10000000</span></div>
                                <div className="pe-3">
                                    <Button href="/duit">Tarik</Button>
                                </div>
                            </div>
                        </Col >
                    </Row></Form>
                    <hr/>
                    <Card>
                        <Card.Title className="d-flex justify-content-center mt-4" >Riwayat Mengajar</Card.Title>
                        <Card.Body>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header >2331 Matematika 27-10-2022</Accordion.Header>
                            <Accordion.Body>
                                <Row >
                                    <p className="d-flex justify-content-between">
                                        <span><span className="fw-bold">Pelajaran</span> : Matematika</span>
                                        <span><span className="fw-bold">Siswa </span>: 10</span>
                                        <span><span className="fw-bold">Pencapaian</span> : Dapat menghitung</span>
                                    </p>
                                    <p className="d-flex justify-content-between">
                                        <span><span className="fw-bold">Poin Waktu</span> : 10233</span>
                                        <span><span className="fw-bold">Bukti Pencapaian </span>: 5 sd.mp4</span>
                                        <span><span className="fw-bold">Pendapatan</span> : 1000</span>
                                    </p>
                                </Row>
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                            <Accordion.Header>2331 Matematika 27-10-2022</Accordion.Header>
                            <Accordion.Body>
                                <Row >
                                    <p className="d-flex justify-content-between">
                                        <span><span className="fw-bold">Pelajaran</span> : Matematika</span>
                                        <span><span className="fw-bold">Siswa </span>: 10</span>
                                        <span><span className="fw-bold">Pencapaian</span> : Dapat menghitung</span>
                                    </p>
                                    <p className="d-flex justify-content-between">
                                        <span><span className="fw-bold">Poin Waktu</span> : 10233</span>
                                        <span><span className="fw-bold">Bukti Pencapaian </span>: 5 sd.mp4</span>
                                        <span><span className="fw-bold">Pendapatan</span> : 1000</span>
                                    </p>
                                </Row>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        </Card.Body>
                    </Card>
                </Container>
            </div>

        </div>
    )
};

export default Profile;