import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import {PiPencilSimpleBold} from 'react-icons/pi';
import {BiTrashAlt} from 'react-icons/bi';
import { Link } from 'react-router-dom'
import { getDataAsistensApi } from "../../../api/asistens/asistensApi";

export default function DataAsisten () {

  const [asistens, setAsistens] = useState();
  
  const getDataAsisten = async () => {
    try {
      const result = await getDataAsistensApi();
      setAsistens(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAsisten = (id) => {
    try {
      const remove = getDataAsistensApi(id);
      setAsistens([]);
      console.log(remove?.data?.data);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataAsisten();
  }, []);

  return (
    <>
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='fw-bold'>Daftar Asisten</h2>
          <hr/>
          <div className="subtitle">LAB TIF</div>
        </div>
        <table className="table table-bordered text-center" style={{ backgroundColor:"#063554", color:"white", borderRadius:"10px"}}>
          <thead>
            <tr>
              <th className='text-center' colSpan={"7"}><h3 className='fw-bold'>Daftar Data User</h3></th>
            </tr>
            <tr>
              <th scope="col">No</th>
              <th scope="col">ID Asisten</th>
              <th scope="col">NIM</th>
              <th scope="col">Nama</th>
              <th scope="col">Periode</th>
              <th scope="col">Golongan</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor:"#fff", color:"black", borderRadius:"10px"}}>
          {asistens && asistens.map((asisten, index) => (
                  <tr key={asisten.asisten_id}>  
                    <td>{index + 1}</td>
                    <td>{asisten.asisten_id}</td>
                    <td>{asisten.nim}</td>
                    <td>{asisten.nama_asisten}</td>
                    <td>{asisten.periode}</td>
                    <td>{asisten.golongan}</td>
                    <td>
                    <Link 
                    to={`Edit/${asisten.id}`} 
                    className='btn btn-warning mx-2 text-white'>
                      <PiPencilSimpleBold />
                    </Link>
                    <button 
                    onClick={e => deleteAsisten (asisten.id)} 
                    className='btn btn-danger'>
                      <BiTrashAlt />
                    </button>
                  </td>
                  </tr>
              ))}
          </tbody>
        </table>
        <NavLink
                href="/register"
                className="btn btn-primary col-md-4 offset-md-8 mt-4"
                id="btn-user"
              >
                Tambah Asisten
              </NavLink>
        </Container>
    </section>
    </>
  )
}

