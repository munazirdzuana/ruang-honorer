import Formulir from "../form/Formulir";
import {Row, Col, Form } from "react-bootstrap";

const Step1=()=>{
    let datee=new Date();
    let mont=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let playDate=datee.getDate()+'-'+mont[datee.getMonth()]+'-'+datee.getFullYear();
    return(
        <div >
            <Form>
                <Row>
                    <Col>
                <Formulir title="UID" tipe="text" value="#123" diss={true}/>
                </Col>
                <Col>
                <Formulir title="Tanggal" tipe="text" value={playDate} diss={true}/>
                </Col>
                <Formulir title="Nama Pelajaran" id="nm-pel" tipe="text"/>
                <Col>
                <Formulir title="Jumlah siswa" id="jlh-siswa" tipe="number"/>
                </Col>
                <Col>
                <Formulir title="Objek pencapaian" id="nm-pel" tipe="text"/> 
                </Col>
                </Row>   
            </Form>
        </div>
    )
}
export default Step1;