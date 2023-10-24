import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import {AiOutlineCheck} from 'react-icons/ai';

export default function Status () {
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
            <tr className='fw-bold'>
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
              <td>Mark</td>
              <td><button type="button" class="btn btn-primary">
                Unduh
                </button>
                </td>
                <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pilihan
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Hapus</a>
              </div>
            </div>
                <td>
                <NavLink
                href="/validasi"
                id="btn-status"
              >
                <button type="button" class="btn btn-success mx-2">
                <AiOutlineCheck/>
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

