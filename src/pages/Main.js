import React, { useState, useEffect } from "react";
import { Card, Container, Button, Modal } from "react-bootstrap";
import Draggable from "react-draggable";
import Webcam from "react-webcam";
import NavigationBar from "../componen/Navbarr/NavigationBar";
import Step2 from "../componen/tabb/Step2";
import aki from "../asset/aki.jpg"

const Main = () => {
    const [timeOn, setTimeOn] = React.useState(false);
    const [time, setTime] = React.useState(0);
    const [show, setShow] = React.useState(false);
  const [mod, setMod] = React.useState(true);

  const mulai = <>
  <Modal.Header closeButton>
    <Modal.Title>Mulai ?</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Pastikan semuanya sudah siap.
  </Modal.Body>
</>

const akhir = <>
  <Modal.Header closeButton>
    <Modal.Title>akhiri?</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Akhiri pembelajaran sekarang
  </Modal.Body>
</>

    useEffect(() => {
        let interval = null;

        if (timeOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!timeOn) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeOn]);

    const err = () => {
        alert("hidupkan kamera")
        window.location.reload();
    }

    return (
        <div className="bgp">
            <NavigationBar page="Main" />
            <Container className="mt-4 pt-5">
                <Card>
                    <Card.Img variant="top" src={aki} />
                    <Card.Body >
                        <div className="Timers">
                            <h1>Waktunya Mengajar</h1>
                            <div id="display" className="badge bg-danger text-wrap fs-3">
                                <span >{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                            </div>
                            <div>
                                {!timeOn && time === 0 && (
                                    <Button onClick={() => { setShow(!show); setMod(true) }}>MULAI</Button>
                                )}{timeOn && (
                                    <Button onClick={() => { setShow(!show); setMod(false) }}>Berhenti</Button>)}
                            </div>
                        </div>
                        {!timeOn&&!mod&&<Step2 timee={time}/>}
                    </Card.Body>
                </Card>
                <Draggable>
                    <div className="bg-light border ind boxcam rounded-3 d-flex align-items-center">
                        <Webcam className="cam" onUserMediaError={err} />
                    </div>
                </Draggable>
            </Container>
            <Modal
        show={show}
        onHide={show === false}
        backdrop="static"
        keyboard={false}
      >
        {
          mod ? mulai : akhir
        }

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            Tidak
          </Button>
          <Button variant="primary" onClick={() => { setTimeOn(!timeOn); setShow(!show)}} >Iya</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
};

export default Main;