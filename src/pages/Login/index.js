import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import img1 from '../../assets/images/img1.jpg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="form-floating" style={{ marginTop: "200px", marginBottom: "100px" }}>
        <Container fluid>
        <Row className="rounded" style={{  padding: "50px", boxShadow: "3px 3px 3px 3px #EBEBEB" }}>
        <Col sm={6}>
            <h2 className="text-center fs-1 fw-semibold">LOGIN</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="username" class="form-label" htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="NIP/NPM" class="form-control" id="username" name="username"/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label" htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" class="form-control" id="password" name="password" />
            </div>
            
            <NavLink
                to="/homeadmin"
                className="btn btn-primary col-12 mx-auto mt-4"
                id="btn-home"
              >
                Daftar Sekarang
              </NavLink>
            <p className="mt-4 text-center">Belum memiliki akun? <span className="fw-bold">Hubungi Laboran TIF</span></p>
            </form>
        </Col>
        <Col sm={6}>
         <Image src={img1} className="rounded"/>
        </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Login