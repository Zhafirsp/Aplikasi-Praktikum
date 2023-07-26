import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from "react-toastify";
import { API } from "../../config/api";
import Image from 'react-bootstrap/Image';
import img1 from '../../assets/images/img1.jpg';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPass: "",
  });
  const navigate = useNavigate();

  const onRegister = async () => {
    try {
      if (!form.username) {
        toast("Please input username !", {
          type: "error",
          theme: "colored",
        });
      }
      if (!form.password) {
        toast("Please input password !", {
          type: "error",
          theme: "colored",
        });
      }
      if (form.password !== form.confirmPass) {
        toast("Please input the same password !", {
          type: "error",
          theme: "colored",
        });
      }
      if (form.username && form.password && form.confirmPass ) {
        const { data } = await API().post("/auth/register", form);
        console.log(data);
        navigate.push("/login");
      }
    } catch (error) {
      console.log(error?.response?.data);
      if (error?.response?.data?.error) {
        toast(error?.response?.data?.error, {
          type: "error",
          theme: "colored",
        });
      } else if (error?.response?.data?.errors) {
        const errors = error?.response?.data?.errors;
        errors.forEach((err) => {
          toast(err, {
            type: "error",
            theme: "colored",
          });
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
        <div className="form-floating" style={{ marginTop: "200px", marginBottom: "100px" }}>
        <Container fluid>
        <Row className="rounded" style={{  padding: "50px", boxShadow: "3px 3px 3px 3px #EBEBEB" }}>
        <Col sm={6}>
         <Image src={img1} className="rounded"/>
        </Col>
        <Col sm={6}>
            <h2 className="text-center fs-1 fw-semibold">REGISTER</h2>
            <form className="login-form">
            <div class="mb-3">
                <label for="username" class="form-label input" htmlFor="username">Username</label>
                <input value={form?.username} onChange={(e) => setForm({...form,username: e.target?.value})} type="username" placeholder="NIP/NPM" class="form-control" id="username" name="username"/>
            </div>
            <div class="row g-2">
            <div class="col-md">
              <div class="mb-3">
              <label for="password" class="form-label input" htmlFor="password">Password</label>
              <input value={form?.password} onChange={(e) => setForm({...form,password: e.target?.value})} type="password" placeholder="********" class="form-control" id="password" name="password" />
              </div>
            </div>
            <div class="col-md">
              <div class="mb-3">
                <label for="confirm password" class="form-label input" htmlFor="confirm password"> Konfirmasi Password</label>
                <input value={form?.confirmPass} onChange={(e) => setForm({...form,confirmPass: e.target?.value})} type="password" placeholder="********" class="form-control" id="confirm password" name="confirm password" />
              </div>
            </div>
            </div>
            <label for="username" class="form-label input" htmlFor="username">Role</label>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Mahasiswa</option>
              <option value="2">Asisten</option>
              <option value="3">Laboran</option>
            </select>

            <button
                type="button"
                onClick={() => onRegister()}
                className="btn btn-primary col-12 mx-auto mt-4"
                id="submit"
              >
                Daftar
              </button>
            </form>
        </Col>
        </Row>
        </Container>
        </div>
    </>
  )
}
