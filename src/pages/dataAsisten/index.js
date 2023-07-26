import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import {PiPencilSimpleBold} from 'react-icons/pi';
import {BiTrashAlt} from 'react-icons/bi';

export default function Asisten () {
  return (
    <>
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='fw-bold'>Daftar Asisten</h2>
          <hr/>
          <div className="subtitle">LAB TIF</div>
        </div>
        <table class="table table-bordered text-center" style={{ backgroundColor:"#063554", color:"white", borderRadius:"10px"}}>
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button type="button" class="btn btn-warning mx-2 text-white"><PiPencilSimpleBold/></button>
                <button type="button" class="btn btn-danger"><BiTrashAlt/></button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <button type="button" class="btn btn-warning mx-2 text-white"><PiPencilSimpleBold/></button>
                <button type="button" class="btn btn-danger"><BiTrashAlt/></button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <button type="button" class="btn btn-warning mx-2 text-white"><PiPencilSimpleBold/></button>
                <button type="button" class="btn btn-danger"><BiTrashAlt/></button>
              </td>
            </tr>
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

