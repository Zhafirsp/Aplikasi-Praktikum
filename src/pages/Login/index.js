import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from "react-toastify";
import { API } from "../../config/api";
import { useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import img1 from '../../assets/images/img1.jpg';

export default function Login () {
    // const [username, setUsername] = useState('');
    // const [pass, setPass] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(username);
    // }

    const [form, setForm] = useState({
        username: "",
        password: "",
      });
      const navigate = useNavigate();
    
      const onLogin = async () => {
        try {
          if (!form.username) {
            toast("Please input username !", {
              type: "error",
            });
          }
          if (!form.password) {
            toast("Please input password !", {
              type: "error",
            });
          }
          if (form.username && form.password) {
            const { data } = await API().post("/auth/login", form);
            if (data?.token) {
              localStorage.setItem("token", data?.token);
              navigate.push("/mahasiswa");
              // window.location.reload()
            }
          }
        } catch (error) {
          console.log(error.response);
          toast(error?.response?.data?.error || "Internal Server Error", {
            type: "error",
          });
        }
      };

    return (
        <>
        <ToastContainer />
        <div className="form-floating" style={{ marginTop: "200px", marginBottom: "100px" }}>
        <Container fluid>
        <Row className="rounded" style={{  padding: "50px", boxShadow: "3px 3px 3px 3px #EBEBEB" }}>
        <Col sm={6}>
            <h2 className="text-center fs-1 fw-semibold">LOGIN</h2>
            <form className="login-form">
            <div class="mb-3">
                <label for="username" class="form-label input" htmlFor="username">Username</label>
                <input value={form?.username} onChange={(e) => setForm({...form,username: e.target?.value})} type="username" placeholder="NIP/NPM" class="form-control" id="username" name="username"/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label input" htmlFor="password">Password</label>
                <input value={form?.password} onChange={(e) => setForm({...form,password: e.target?.value})} type="password" placeholder="********" class="form-control" id="password" name="password" />
            </div>
            
            <button
                type="button"
                onClick={() => onLogin()}
                className="btn btn-primary col-12 mx-auto mt-4"
                id="submit"
              >
                Login
              </button>
            <p className="mt-4 text-center">Belum memiliki akun? <span className="fw-bold">Hubungi Laboran TIF</span></p>
            </form>
        </Col>
        <Col sm={6}>
         <Image src={img1} className="rounded"/>
        </Col>
        </Row>
        </Container>
        </div>
        </>
    )
}

