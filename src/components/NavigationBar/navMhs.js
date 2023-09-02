import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/styles/navMhs.css';
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

export default function NavMhs() {

  const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <div className="col-md-3 mb-2 mb-md-0">
        <Navbar.Brand href="/">LAB-TIF</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/mahasiswa">Home</Nav.Link>
            <Nav.Link href="/civitas">Civitas</Nav.Link>
            <Nav.Link href="/mendaftar">Cara Mendaftar</Nav.Link>
            <Nav.Link href="/pendaftaran">Pendaftaran</Nav.Link>
            <Nav.Link href="/pengumuman">Pengumuman</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </ul>
        <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2" onClick={signOut}>Sign Out</button>
      </div>
      </Container>
    </Navbar>
  );
}