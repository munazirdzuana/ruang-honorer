import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Formulir from "../form/Formulir";

const Step2=(props)=>{
    const [time, setTime]=React.useState(0);
    const [timeOn, setTimeOn]=React.useState(false);
    const [show, setShow] = React.useState(false);
    const [mod,setMod]=React.useState(true);
    

    const mulai=<>
        <Modal.Header closeButton>
            <Modal.Title>Mulai ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Pastikan semuanya sudah siap.
        </Modal.Body>
    </>

    const akhir=<>
    <Modal.Header closeButton>
          <Modal.Title>akhiri?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Akhiri pembelajaran sekarang
        </Modal.Body>
    </>

    React.useEffect(()=>{
        let interval =null;

        if (timeOn){
            interval=setInterval(()=>{
                setTime((prevTime)=>prevTime+10);
            },10);
        }else if (!timeOn) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[timeOn]);

    function kirimP(e){
      props.callback(e);
    }

    return(
        <div>
            <div className="Timers">
            <h1>Stopwatch</h1>
            <div id="display" className="badge bg-danger text-wrap fs-3">
                <span >{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div>
                {!timeOn && time === 0 && (
                <Button onClick={()=> {setShow(!show); setMod(true) }}>MULAI</Button>
                )}{timeOn &&(
                <Button onClick={() => {setShow(!show); setMod(false)}}>Berhenti</Button>)}
            </div>

      {/* <div id="buttons">
        {!timeOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}>Start</button>
        )}
        {timeOn && <button onClick={() => setTimeOn(false)}>
            Stop
            </button>}
        {!timeOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timeOn && time > 0 && (
          <button onClick={() => setTimeOn(true)}>Resume</button>
        )}
      </div> */}
    </div>
    <hr/>
    <div>
        {!timeOn&&!mod&&<Form>
        <Formulir title="point Waktu" tipe="number" value={time} diss={true}/>
        <Formulir title="Pencapaian Pembelajaran" tipe="file" Text="Dapat berupa vidio/foto/pdf dari pencapaian kali ini"/>
        <Button type="submit" >Submit</Button>
        </Form>}
    </div>

    <Modal
        show={show}
        onHide={show===false}
        backdrop="static"
        keyboard={false}
      >
        {
            mod?mulai:akhir
        }
        
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(!show)}>
            Tidak
          </Button>
          <Button variant="primary" onClick={() => {setTimeOn(!timeOn); setShow(!show); kirimP(true)}} >Iya</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
export default Step2;