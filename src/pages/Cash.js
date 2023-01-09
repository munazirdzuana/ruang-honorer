import { useState ,useEffect } from "react"
import { Card, Container, InputGroup,Form, Button, Alert} from "react-bootstrap"
import Formulir from "../componen/form/Formulir"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../fiture/AuthSlice";


const Cash=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state) => state.auth);
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/login");
        }
    }, [isError, navigate]);
  

    const [alet,setAlet]=useState(false);
      
    const nomina=<Card.Body className="p-3">
        <Formulir title="Nama" id="namarek" tipe="text" Text="Pastikan nama anda sama seperti nama di rekening anada"/>
        <Formulir title="NO rekening" id="no-rek" tipe="text"/>
            <InputGroup className="mb-3">
            <InputGroup.Text>Rp.</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            
            <Button onClick={()=>setAlet(true)}>Lanjut</Button>
            </Card.Body>

    return(
        <Container fluid className="bd d-flex justify-content-center align-items-center">
           <Card className="bg-white my-5 mx-auto sh"style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <Card.Header><a href="/profil" className="fs-3 text-decoration-none text-reset">&#8592; </a>AMBIL Uang</Card.Header>
            {
            alet?<Alert variant="danger" onClose={() => setAlet(false)} dismissible>
                Tunggu sampai kami punya uang oke
            </Alert>:""}
            <div className=" border border-primary bg-primary rounded-2 m-2">
                <div className="fs-5 text-light text-center">SALDO</div>
                <div className="fs-5 border rounded-2 m-1 bg-light">
                    <div className="d-flex justify-content-between">RP<span>{user && user.saldo}</span></div>
                </div>
            </div>
            {nomina}
            </Card>
        </Container> 
    )
}
export default Cash