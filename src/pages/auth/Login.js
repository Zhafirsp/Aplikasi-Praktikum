import { useRef, useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from "react-toastify";
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import { Link, useNavigate, useLocation  } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import img1 from '../../assets/images/img1.jpg';

export default function Login ()  {

  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
  

      const onLogin = async () => {
        try {
          const response = await axios.post(`/v1/auth/login`,JSON.stringify({user, pwd}),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        console.log(JSON.stringify(response?.data));
        //console.log(JSON.stringify(response));
        const accessToken = response?.data?.accessToken;
        const role = response?.data?.role;
        setAuth({ user, pwd, role, accessToken });
        setUser('');
        setPwd('');
        navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        toast('No Server Response',{
          type: "error",
        })
    } else if (err.response?.status === 400) {
      toast('Missing Username or Password',{
        type: "error",
      })
    } else if (err.response?.status === 401) {
      toast('Unauthorized',{
        type: "error",
      })
    } else {
      toast('Login Failed',{
        type: "error",
      })
    }
}
}

const togglePersist = () => {
  setPersist(prev => !prev);
}

useEffect(() => {
  localStorage.setItem("persist", persist);
}, [persist])


    return (
        <>
        <ToastContainer />
        <div className="form-floating" style={{ marginTop: "200px", marginBottom: "100px" }}>
        <Container fluid>
        <Row className="rounded" style={{  padding: "50px", boxShadow: "3px 3px 3px 3px #EBEBEB" }}>
        <Col sm={6}>
            <h2 className="text-center fs-1 fw-semibold">LOGIN</h2>
            <form className="login-form">
            <div className="mb-3">
                <label 
                className="form-label input" 
                htmlFor="username">
                  Username
                </label>

                <input 
                ref={userRef}
                value={user} 
                onChange={(e) => 
                setUser(e.target.value)} 
                type="username" 
                placeholder="NIP/NPM" 
                className="form-control" 
                id="username" 
                name="username"/>
            </div>

            <div className="mb-3">
                <label 
                className="form-label input" 
                htmlFor="password">
                  Password
                </label>

                <input 
                value={pwd} 
                onChange={(e) => 
                setPwd(e.target.value)} 
                type="password" 
                placeholder="********" 
                className="form-control" 
                id="password" 
                name="password" />
            </div>
            
            <button
                type="button"
                onClick={() => onLogin()}
                className="btn btn-primary col-12 mx-auto mt-4"
                id="submit"
              >
                Login
              </button>
              <div className="persistCheck">
                    <input
                        type="checkbox"
                        id="persist"
                        onChange={togglePersist}
                        checked={persist}
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </div>
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