import React, { useState, useEffect } from "react";
import { Button,  Col, Container, Form, Row } from "react-bootstrap";
import NavigationBar from "../componen/Navbarr/NavigationBar";
import pic from "../asset/mavatar.svg"
import lock from "../asset/geo.svg"
import clock from "../asset/clock-history.svg"
import mail from "../asset/mailbox.svg"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMe } from "../fiture/AuthSlice";
import axios from "axios";
import Accordions from "../componen/Accor/Accordions";


const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state) => state.auth);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [msg, setMsg] = useState("");
    const { id } = useParams();

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/login");
        }
    }, [isError, navigate]);

    const upp = async (e) => {
        e.preventDefault();
        if (fom) {
            console.log("handle request ");
        } else {
            try {
                await axios.patch(`http://localhost:5000/users/${user.uuid}`, {
                    name: name,
                    desc: desc,
                });
                setFom(!fom)
                document.location.reload();
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }

        }

    }
    const [fom, setFom] = useState(true);
    let btn1

    if(fom){
        btn1=<Button variant="outline-dark" type='button' onClick={() => setFom(!fom)}>edit</Button>;

    }
    else{
        btn1=<Button type="submit"> Submit </Button>
    }


    return (
        <div className="bgp">
            <NavigationBar page="Profile" />
            <div className="pt-5">
                <Container>
                    <Form onSubmit={upp}>
                        <Row className="d-flex mt-4 mb-3">
                            <div className="d-grid gap-1 p-2 d-flex justify-content-end">
                                {btn1}
                                {console.log(msg)}
                                {console.log(name)}
                                {console.log(desc)}
                            </div>
                            <Col md={3} className="d-flex justify-content-center align-items-start">
                                <div className="profil">
                                    <img src={pic} alt="profile" className="rounded-circle img-fluid p-2" />
                                    {fom ? null : <Form.Control type="file" />}
                                </div>
                            </Col >
                            <Col md={9} className="ps-4">

                                <div>
                                    <h1><Form.Control size="lg" plaintext={fom} readOnly={fom} defaultValue={user && user.name}
                                        onChange={(e) => setName(e.target.value)} /></h1>
                                    <div>
                                        <p><span className="pe-2"><img src={lock} alt="lokasi" /> : {user && user.city}</span>
                                            <span className="px-2"><img src={mail} alt="mail" /> : {user && user.email}</span>
                                            <span className="px-2"><img src={clock} alt="waktu" /> : { Math.floor((user && user.time / 60000) % 60)} jam</span>
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="ps-3">
                                    <div>
                                        About Me
                                    </div>
                                    <div className="px-3">
                                        <p><Form.Control className="max-fom" plaintext={fom} readOnly={fom} rows={3} defaultValue={user && user.desc}
                                            onChange={(e) => setDesc(e.target.value)} /></p>
                                        <p></p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between border align-items-center rounded-pill bg-light h-30 border-secondary">
                                    <div className="p-3 fw-bold">Rp. <span>{user && user.saldo}</span></div>
                                    <div className="pe-3">
                                        <Button href="/duit">Tarik</Button>
                                    </div>
                                </div>
                            </Col >
                        </Row>
                    </Form>
                    <hr />
                    <Accordions />
                </Container>
            </div>

        </div>
    )
};

export default Profile;