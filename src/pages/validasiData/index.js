import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import {PiPencilSimpleBold} from 'react-icons/pi';
import {BiTrashAlt} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai'

export default function Validasi () {
  return (
    <>
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='fw-bold'>Validasi Data Pendaftaran</h2>
          <hr/>
          <div className="subtitle">LAB TIF</div>
        </div>
        <table class="table table-bordered text-center" style={{ backgroundColor:"#063554", color:"white", borderRadius:"10px"}}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Judul</th>
              <th scope="col">Deskripsi</th>
              <th scope="col">Due Date</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor:"#fff", color:"black", borderRadius:"10px"}}>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>
                <button type="button" class="btn btn-secondary mx-2 text-white"><AiOutlinePlus/></button>
                <button type="button" class="btn btn-warning mx-2 text-white"><PiPencilSimpleBold/></button>
                <button type="button" class="btn btn-danger"><BiTrashAlt/></button>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="table table-bordered text-center" style={{ backgroundColor:"#063554", color:"white", borderRadius:"10px"}}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">NRP</th>
              <th scope="col">Nama</th>
              <th scope="col">Tgl</th>
              <th scope="col">File</th>
              <th scope="col">Status</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor:"#fff", color:"black", borderRadius:"10px"}}>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td><button type="button" class="btn btn-primary my-1">Unduh</button></td>
              <td>Otto</td>
              <td>
                  <NavLink
                href="/status"
                id="btn-status"
              >
                <button type="button" class="btn btn-warning mx-2 text-white">
                <PiPencilSimpleBold/>
              </button>
              </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
        </Container>
    </section>
    </>
  )
}

