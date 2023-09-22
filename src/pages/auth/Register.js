import { useRef, useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from "react-toastify";
// import {API} from '../../api/axios';
import Image from 'react-bootstrap/Image';
import img1 from '../../assets/images/img1.jpg';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { postRegisterApi } from "../../api/auth/authApi";

export default function Register() {

  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const [success, setSuccess] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    setLoading(true);
    try {
      const result = await postRegisterApi({ username, password, role })
      console.log(result?.data?.data);
      setLoading(false);
      setUsername('');
      setPassword('');
      setRole('');
    } catch (err) {
      if (!err?.response) {
        toast("No Server Response", {
          type: "error",
        });
      } else if (err.response?.status === 409) {
        toast("Username Taken", {
          type: "error",
        });
      } else {
        toast("Registration  Failed", {
          type: "error",
        });
        console.log(err?.response.data);
        console.log(err?.response.status);
        console.log(err?.response.headers);
      }
    }
  };

  // const onRegister = async () => {
  //   try {
  //     if (!form.username) {
  //       toast("Please input username !", {
  //         type: "error",
  //         theme: "colored",
  //       });
  //     }
  //     if (!form.password) {
  //       toast("Please input password !", {
  //         type: "error",
  //         theme: "colored",
  //       });
  //     }
  //     if (form.password !== form.confirmPass) {
  //       toast("Please input the same password !", {
  //         type: "error",
  //         theme: "colored",
  //       });
  //     }
  //     if (form.username && form.password && form.confirmPass ) {
  //       const { data } = await API().post("v1/auth/register",JSON.stringify({form}));
  //       console.log(data);
  //       navigate.push("/");
  //     }
  //   } catch (error) {
  //     console.log(error?.response?.data);
  //     if (error?.response?.data?.error) {
  //       toast(error?.response?.data?.error, {
  //         type: "error",
  //         theme: "colored",
  //       });
  //     } else if (error?.response?.data?.errors) {
  //       const errors = error?.response?.data?.errors;
  //       errors.forEach((err) => {
  //         toast(err, {
  //           type: "error",
  //           theme: "colored",
  //         });
  //       });
  //     }
  //   }
  // };

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
            <div className="mb-3">
                <label className="form-label input" htmlFor="username">Username</label>
                <input 
                value={username} 
                onChange={(e) => setUsername(e.target?.value)} 
                type="username" 
                placeholder="NIP/NPM" 
                className="form-control" 
                id="username" 
                name="username"
                />
            </div>
            <div className="row g-2">
            <div className="col-md">
              <div className="mb-3">
              <label className="form-label input" htmlFor="password">Password</label>
              <input 
              value={password} 
              onChange={(e) => setPassword(e.target?.value)} 
              type="password" 
              placeholder="********" 
              className="form-control" 
              id="password" 
              name="password" />
              </div>
            </div>
            <div className="col-md">
              <div className="mb-3">
                <label className="form-label input" htmlFor="confirm password"> Konfirmasi Password</label>
                <input 
                value={confirmPass} 
                onChange={(e) => setConfirmPass(e.target?.value)} 
                type="password" 
                placeholder="********" 
                className="form-control" 
                id="confirm password" 
                name="confirm password" />
              </div>
            </div>
            </div>
            <label className="form-label input" htmlFor="role">Role</label>
            <select 
            className="form-select" 
            aria-label="Default select example" 
            value={role}
            onChange={(e) => setRole(e.target?.value)} 
            >
              <option  value="mahasiswa">Mahasiswa</option>
              <option  value="asisten">Asisten</option>
              <option  value="laboran">Laboran</option>
            </select>

            <button
                type="submit"
                className="btn btn-primary col-12 mx-auto mt-4"
                id="submit"
                onClick={() => onRegister()}
              >
                  {loading ? "Loading..." : "REGISTER"}
              </button>
            </form>
        </Col>
        </Row>
        </Container>
        </div>
    </>
  )
}