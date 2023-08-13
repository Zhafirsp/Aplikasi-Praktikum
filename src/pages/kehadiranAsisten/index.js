import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import {PiPencilSimpleBold} from 'react-icons/pi';

export default function Kehadiran () {
  return (
    <>
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='fw-bold'>JADWAL SEMESTER</h2>
          <hr/>
          <div className="subtitle">LAB TIF</div>
        </div>
        <table class="table table-bordered text-center" style={{ backgroundColor:"#063554", color:"white", borderRadius:"10px"}}>
          <thead>
            <tr>
              <th className='text-center' colSpan={"11"}><h3 className='fw-bold'>Senin</h3></th>
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
              <th scope="col">Asisten</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor:"#fff", color:"black", borderRadius:"10px"}}>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                  <NavLink
                href="/presensi"
                id="btn-presensi"
              >
                <button type="button" class="btn btn-warning mx-2 text-white">
                <PiPencilSimpleBold/>
              </button>
              </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                  <NavLink
                href="/presensi"
                id="btn-presensi"
              >
                <button type="button" class="btn btn-warning mx-2 text-white">
                <PiPencilSimpleBold/>
              </button>
              </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                  <NavLink
                href="/presensi"
                id="btn-presensi"
              >
                <button type="button" class="btn btn-warning mx-2 text-white">
                <PiPencilSimpleBold/>
              </button>
              </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
        <NavLink
                href="/register"
                className="btn btn-primary col-md-4 offset-md-8 mt-4"
                id="btn-user"
              >
                Cetak Kehadiran
              </NavLink>
        </Container>
    </section>
    </>
  )
}

