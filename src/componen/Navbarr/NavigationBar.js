import {Container, Navbar, Nav, Button, NavDropdown} from "react-bootstrap";
import logo from '../../asset/logo.png'
import pic from '../../asset/mavatar.svg'

const NavigationBar = ({page}) => {
    let mass
        if(page==="Home"){
            mass=<Nav>
            {/* <Nav.Link href="#action1">ABOUT</Nav.Link>
            <Nav.Link href="#action2"></Nav.Link> */}
            <Button variant="primary" href="/login">Login</Button>
            </Nav>
        }else if(page==="Profile"){
            mass=<Nav>
                    <Nav.Link href="/Main" className="pe-3">Mulai</Nav.Link>
                    <Button variant="primary" href="/">Logout</Button>
                </Nav>
        }else if(page==="Singup"){
           mass=<Nav>
                    <Button variant="primary" href="/login">Login</Button>
                </Nav>
        }else if(page==="Main"){
            mass=<Nav >
                        <Nav.Link href="/Profil">
                            <img src={pic} width="auto" height="30" alt="Nama" className="shadow-sm rounded-circle"/>
                        </Nav.Link>
                        <NavDropdown title="Munazir Dzuana S" id="collasible-nav-dropdown" className="m-auto">
                        <NavDropdown.Item href="/">Home</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                        </NavDropdown>
                 </Nav>
             }
    
    return (
        <div>
            <Navbar bg="light" fixed="top"  className="border" collapseOnSelect expand="md" >
                <Container >
                    <Navbar.Brand href ="/">
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