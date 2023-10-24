import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import {PiPencilSimpleBold} from 'react-icons/pi';
import {BiTrashAlt} from 'react-icons/bi';
import { getJadwalApi } from '../../../api/jadwal/jadwalApi';
import { getDosenApi, getKelasApi, getKrsApi, getMatkulApi } from "../../../api/SevimaData/SevimaApi";

export default function JadwalLab () {

  const [jadwal, setJadwal] = useState();

  const dataToSend = {
    periode_masuk : 20231
  };


  const getJadwal = async () => {
    try {
      const result = await getJadwalApi();
      setJadwal(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getKelas = async () => {
    try {
      const result = await getKelasApi();
      setJadwal(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDosen = async () => {
    try {
      const result = await getDosenApi();
      setJadwal(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getKrs = async () => {
    try {
      const result = await getKrsApi();
      setJadwal(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getMatkul = async () => {
    try {
      const result = await getMatkulApi();
      setJadwal(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJadwal();
    getKelas();
    getDosen();
    getKrs();
    getMatkul();
  }, []);


  return (
    <>
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='fw-bold'>JADWAL SEMESTER</h2>
          <hr/>
          <div className="subtitle">LAB TIF</div>
        </div>
        <table className="table table-bordered text-center" style={{ backgroundColor:"#063554", color:"white", borderRadius:"10px"}}>
          <thead>
            <tr>
              <th className='text-center' colSpan={"10"}><h3 className='fw-bold'>Senin</h3></th>
            </tr>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Mulai</th>
              <th scope="col">Selesai</th>
              <th scope="col">Kode MK</th>
              <th scope="col">Mata Kuliah</th>
              <th scope="col">SKS</th>
              <th scope="col">Kelas</th>
              <th scope="col">Ruang</th>
              <th scope="col">Dosen</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor:"#fff", color:"black", borderRadius:"10px"}}>
          {jadwal && jadwal.map((jdwl, index) => (
                  <tr key={jdwl.praktik_id}>  
                    <td>{index + 1}</td>
                    <td>{jdwl.jam_mulai}</td>
                    <td>{jdwl.jam_selesai}</td>
                    <td>{jdwl.kode_mk}</td>
                    <td>{jdwl.Matkul.nama_mk}</td>
                    <td>{jdwl.Matkul.sks_mk}</td>
                    <td>{jdwl.kela.nama_kelas}</td>
                    <td>{jdwl.Dosen.nama_dosen}</td>
                  </tr>
              ))}
          </tbody>
        </table>
        </Container>
    </section>
    </>
  )
}

