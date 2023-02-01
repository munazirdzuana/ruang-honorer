import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import logo from '../../asset/logo.png'
import pic from '../../asset/mavatar.svg'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "../../fiture/AuthSlice.js";
import React, { useEffect } from "react";
import { getMe } from "../../fiture/AuthSlice";

const NavigationBar = ({ page }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
      };


    let mass
    if (page === "Home") {
        mass = <Nav>
            {isError?
            <Button variant="primary" href="/login">Login</Button>:
            <NavDropdown title={user && user.name} id="collasible-nav-dropdown" className="m-auto">
                <NavDropdown.Item href={`/profil/${user && user.uuid}`}>Profil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>}
        </Nav>
    } else if (page === "Profile") {
        mass = <Nav>
            <Nav.Link href="/Main" className="pe-3">Mulai</Nav.Link>
            <Button variant="primary" onClick={logout}>Logout</Button>
        </Nav>
    } else if (page === "Singup") {
        mass = <Nav>
            <Button variant="primary" href="/login">Login</Button>
        </Nav>
    } else if (page === "Main") {
        mass = <Nav >
            <Nav.Link href={`/profil/${user && user.uuid}`}>
                <img src={pic} width="auto" height="30" alt="Nama" className="shadow-sm rounded-circle" />
            </Nav.Link>
            <NavDropdown title={user && user.name} id="collasible-nav-dropdown" className="m-auto">
                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logoute</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    }

    return (
        <div>
            <Navbar bg="light" fixed="top" className="border" collapseOnSelect expand="md" >
                <Container >
                    <Navbar.Brand href="/">
                        <img src={logo} width="auto" height="40" alt="RGH" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end">
                        {mass}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;