import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';

export default function Presensi () {
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
              <th className='text-center' colSpan={"11"}><h3 className='fw-bold'>Pertemuan 1</h3></th>
            </tr>
            <tr>
              <th scope="col">No</th>
              <th scope="col">ID Aslab</th>
              <th scope="col">Nama</th>
              <th scope="col">Kehadiran</th>
              <th scope="col">Pengganti</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor:"#fff", color:"black", borderRadius:"10px"}}>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <div class="form-check form-check-inline">
                <input class="btn-check" type="radio" name="btnRadio" id="presensiHadir" value="option1"/>
                <label class="form-check-label btn btn-outline-primary" for="presensiHadir">H</label>
              </div>
              <div class="form-check form-check-inline">
              <input class="btn-check" type="radio" name="btnRadio" id="presensiAlfa" value="option2"/>
                <label class="form-check-label btn btn-outline-primary" for="presensiAlfa">I</label>
              </div>
              <div class="form-check form-check-inline">
              <input class="btn-check" type="radio" name="btnRadio" id="presensiIzin" value="option3"/>
                <label class="form-check-label btn btn-outline-primary" for="presensiIzin">S</label>
              </div>
              </td>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
              <div class="form-check form-check-inline">
                <input class="btn-check" type="radio" name="btnRadio" id="presensiHadir" value="option1"/>
                <label class="form-check-label btn btn-outline-primary" for="presensiHadir">H</label>
              </div>
              <div class="form-check form-check-inline">
              <input class="btn-check" type="radio" name="btnRadio" id="presensiAlfa" value="option2"/>
                <label class="form-check-label btn btn-outline-primary" for="presensiAlfa">I</label>
              </div>
              <div class="form-check form-check-inline">
              <input class="btn-check" type="radio" name="btnRadio" id="presensiIzin" value="option3"/>
                <label class="form-check-label btn btn-outline-primary" for="presensiIzin">S</label>
              </div>
              </td>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <div class="form-check form-check-inline">
                <input class="btn-check" type="radio" name="btnRadio" id="presensiHadir" value="option1"/>
                <label class="form-check-label btn btn-outline-primary" for="presensiHadir">H</label>
              </div>
              <div class="form-check form-check-inline">
              <input class="btn-check" type="radio" name="btnRadio" id="presensiAlfa" value="option2"/>
                <label class="form-check-label btn btn-outline-primary" for="presensiAlfa">I</label>
              </div>
              <div class="form-check form-check-inline">
              <input class="btn-check" type="radio" name="btnRadio" id="presensiIzin" value="option3"/>
                <label class="form-check-label btn btn-outline-primary" for="presensiIzin">S</label>
              </div>
              </td>
              <td>
              Mark
              </td>
            </tr>
          </tbody>
        </table>
        <NavLink
                href="/kehadiran"
                className="btn btn-primary col-md-4 offset-md-8 mt-4"
                id="btn-user"
              >
                Simpan
              </NavLink>
        </Container>
    </section>
    </>
  )
}

