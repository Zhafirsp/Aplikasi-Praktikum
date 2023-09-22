import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import {PiPencilSimpleBold} from 'react-icons/pi';
import {BiTrashAlt} from 'react-icons/bi';
import { Link } from 'react-router-dom'
import { getDataLaboransApi } from "../../../api/laborans/laboransApi";



export default function DataLaboran () {

  const [laborans, setLaborans] = useState();
  
  const getDataLaborans = async () => {
    try {
      const result = await getDataLaboransApi();
      setLaborans(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLaboran = (id) => {
    try {
      const remove = getDataLaboransApi(id);
      setLaborans([]);
      console.log(remove?.data?.data);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataLaborans();
  }, []);
  
  return (
    <>
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='fw-bold'>Daftar Laboran</h2>
          <hr/>
          <div className="subtitle">LAB TIF</div>
        </div>
        <table className="table table-bordered text-center" style={{ backgroundColor:"#063554", color:"white", borderRadius:"10px"}}>
          <thead>
            <tr>
              <th className='text-center' colSpan={"6"}><h3 className='fw-bold'>Daftar Data Laboran</h3></th>
            </tr>
            <tr>
              <th scope="col">No</th>
              <th scope="col">NIP</th>
              <th scope="col">Nama</th>
              <th scope="col">Jenis Pegawai</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor:"#fff", color:"black", borderRadius:"10px"}}>
          {laborans && laborans.map((laboran, index) => (
                  <tr key={laboran.nip}>  
                    <td>{index + 1}</td>
                    <td>{laboran.nip}</td>
                    <td>{laboran.nama_laboran}</td>
                    <td>{laboran.jenis_pegawai}</td>
                    <td>
                    <Link 
                    to={`Edit/${laboran.id}`} 
                    className='btn btn-warning mx-2 text-white'>
                      <PiPencilSimpleBold />
                    </Link>
                    <button 
                    onClick={e => deleteLaboran (laboran.id)} 
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
                Tambah Laboran
              </NavLink>
        </Container>
    </section>
    </>
  )
}

