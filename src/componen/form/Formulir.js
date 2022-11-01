import {Form} from "react-bootstrap";

const Formulir=(props)=>{
    let hold=`Masukan ${props.title}`
    let Id=props.iD
    let disa=props.diss

    return(
        <Form.Group className="mb-3" controlId={Id} >
            <Form.Label>{props.title}</Form.Label>
            <Form.Control type={props.tipe} placeholder={hold} disabled={disa} defaultValue={props.value} plaintext={disa}/>
            <Form.Text className="text-muted">
                {props.Text}
            </Form.Text>
        </Form.Group>
    )
}
export default Formulir;