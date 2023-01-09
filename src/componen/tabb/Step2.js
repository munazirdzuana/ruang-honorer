import React, { useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
 

const Step2 = (props) => {

  const [tanggal, setTanggal]=useState("")
  const [nPel, setnPel]=useState("")
  const [peserta, setPeserta]=useState(0)
  const [obj, setObj]=useState("")
  const [time, setTime]=useState(0)
  const navigate = useNavigate("");
  const {user } = useSelector((state) => state.auth);
  const [msg, setMsg] = useState("");

  let datee = new Date();
  let mont = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let playDate = datee.getDate() + '-' + mont[datee.getMonth()] + '-' + datee.getFullYear();

  useEffect(()=>{
    setTime(props.timee)
    setTanggal(playDate)
  },[props.timee, playDate])

  const addKelas = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/products", {
            nPel: nPel,
            peserta: peserta,
            objp: obj,
            tgl: tanggal,
            time: time
        });
        navigate(`/profil/${user.uuid}`);
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
};
  
  return (
    <div>
      <hr />
      <Form onSubmit={addKelas}>
        {console.log(msg)}
        {console.log(nPel)}
        {console.log(peserta)}
        {console.log(obj)}
        {console.log(tanggal)}
        {console.log(time)}
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="nik" >
              <Form.Label>Tanggal</Form.Label>
              <Form.Control type="text" value={playDate} plaintext={true}
              />
            </Form.Group>
          </Col>
          {/* <Formulir title="Nama Pelajaran" id="nm-pel" tipe="text" /> */}
          <Form.Group className="mb-3" controlId="nik" >
            <Form.Label>Nama Pelajaran</Form.Label>
            <Form.Control type="text"
            onChange={(e) => setnPel(e.target.value)}
            />
          </Form.Group>
          <Col>
            {/* <Formulir title="Jumlah siswa" id="jlh-siswa" tipe="number" /> */}
            <Form.Group className="mb-3" controlId="nik" >
              <Form.Label>Jumlah siswa</Form.Label>
              <Form.Control type="number"
              onChange={(e) => setPeserta(parseInt(e.target.value))}
              />
            </Form.Group>
          </Col>
          <Col>
            {/* <Formulir title="Objek pencapaian" id="nm-pel" tipe="text" /> */}
            <Form.Group className="mb-3" controlId="nik" >
              <Form.Label>Objek pencapaian</Form.Label>
              <Form.Control type="text"
              onChange={(e) => setObj(e.target.value)} 
              />
            </Form.Group>
          </Col>
        </Row>
        {/* <div>
        {!timeOn && !mod &&  */}
        <Form.Group className="mb-3" controlId="nik" >
          <Form.Label>Point waktu</Form.Label>
          <Form.Control type="text" value={props.timee} plaintext={true} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="nik" >
          <Form.Label>Pencapaian Pembelajaran</Form.Label>
          <Form.Control type="file"
          // onChange={(e) => setNik(e.target.value)} 
          />
          <Form.Text className="text-muted">
            Dapat berupa vidio/foto/pdf dari pencapaian kali ini
          </Form.Text>
        </Form.Group>
        <Button type="submit" >Submit</Button>
      </Form>
    </div>
  )
}
export default Step2;