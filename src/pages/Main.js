import React, { useState } from "react";
import { Button, Card, Container, Tab, Tabs } from "react-bootstrap";
import Draggable from "react-draggable";
import Webcam from "react-webcam";
import NavigationBar from "../componen/Navbarr/NavigationBar";
import Step1 from "../componen/tabb/Step1";
import Step2 from "../componen/tabb/Step2";
import aki from"../asset/aki.jpg"

const Main = () =>{
    const [key, setKey] = useState('1');
    const [dissa, setDissa] =useState(false);
    const [kem,setKem]=useState(false)

    const callback = (e)=>{
        setKem(e)
    }

    const err=()=>{
        alert("hidupkan kamera")
        window.location.reload();
    }

    //   const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
        <div className="bgp">
            <NavigationBar page="Main"/>
            
            <Container className="mt-4 pt-5">
                <Card>
                <Card.Img variant="top" src={aki} />
                <Card.Body >
                    <Tabs 
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    
                    >
                        <Tab eventKey="1" title="STEP 1" disabled={dissa}>
                            <Step1/>
                            <Button onClick={()=>{setKey('2'); setDissa(true)}}>Lanjut</Button>
                        </Tab>
                        <Tab eventKey="2" title="STEP 2" disabled>
                            <Step2 callback={callback}/>
                            <Button disabled={kem} className="mt-2" onClick={()=>{setKey('1'); setDissa(true)}}>Kembali</Button>
                        </Tab>
                </Tabs>
                </Card.Body>
                </Card>
                <Draggable>
                    <div className="bg-light border ind boxcam rounded-3 d-flex align-items-center">
                        <Webcam  className="cam" onUserMediaError={err} />
                    </div>
                </Draggable>
            </Container>
        </div>
    )
};

export default Main;