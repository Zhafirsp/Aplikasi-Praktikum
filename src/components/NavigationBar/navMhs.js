import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/styles/navMhs.css';

export default function NavMhs() {
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
            <Nav.Link href="/Mahasiswa">Home</Nav.Link>
            <Nav.Link href="/Civitas">Civitas</Nav.Link>
            <Nav.Link href="/Mendaftar">Cara Mendaftar</Nav.Link>
            <Nav.Link href="/Pendaftaran">Pendaftaran</Nav.Link>
            <Nav.Link href="/Pengumuman">Pengumuman</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </ul>
        <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2"><Nav.Link href="/login">Login</Nav.Link></button>
      </div>
      </Container>
    </Navbar>
  );
}