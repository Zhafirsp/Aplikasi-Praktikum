import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <div class="col-md-3 mb-2 mb-md-0">
        <Navbar.Brand href="/">LAB-TIF</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Lab">Laboratorium</Nav.Link>
            <Nav.Link href="/civitas">Civitas</Nav.Link>
            <Nav.Link href="/mendaftar">Cara Mendaftar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </ul>
        <div class="col-md-3 text-end">
        <button type="button" class="btn"><Nav.Link href="/daftar">Daftar</Nav.Link></button>
        <button type="button" class="btn btn-outline-primary me-2"><Nav.Link href="/masuk">Masuk</Nav.Link></button>
      </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;