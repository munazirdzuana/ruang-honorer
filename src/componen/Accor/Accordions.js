import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion, Button, Card, Row } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { getMe } from "../../fiture/AuthSlice";
import { useParams } from "react-router-dom";


const Accordions = () => {
    const [products, setProducts] = useState([]);
    const [msg, setMsg] = useState("");

    const dispatch = useDispatch();
    const { id } = useParams();

    function calculateSum(array, property) {
        let sum = 0;

        array.forEach(element => {
            sum += element[property];
        });

        return sum;
    }

    const result1 = calculateSum(products, 'time')
    const result2 = calculateSum(products, 'harga')

    const updateProduct = async (e) => {
        try {
            await axios.patch(`http://localhost:5000/timesaldo/${id}`, {
                time: result1,
                saldo: result2
            });
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);


    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    };


    return (
        <Card>
            <Card.Title className="d-flex justify-content-center mt-4" >Riwayat Mengajar</Card.Title>
            <Card.Body>
                {console.log(msg)}
                <Button onClick={updateProduct}>Refrest</Button>
                <Accordion>
                    {products.map((product, index) => (
                        <Accordion.Item eventKey={product.uuid}>
                            <Accordion.Header >{index + 1} {product.nPel} {product.tgl}</Accordion.Header>
                            <Accordion.Body>
                                <Row >
                                    <p className="d-flex justify-content-between">
                                        <span><span className="fw-bold">Pelajaran</span> : {product.nPel}</span>
                                        <span><span className="fw-bold">Siswa </span>: {product.peserta}</span>
                                        <span><span className="fw-bold">Pencapaian</span> : {product.objp}</span>
                                    </p>
                                    <p className="d-flex justify-content-between">
                                        <span><span className="fw-bold">Poin Waktu</span> : {product.time}</span>
                                        <span><span className="fw-bold">Bukti Pencapaian </span>: { }</span>
                                        <span><span className="fw-bold">Pendapatan</span> : {product.harga}</span>
                                    </p>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

            </Card.Body>
        </Card>
    )
}
export default Accordions;