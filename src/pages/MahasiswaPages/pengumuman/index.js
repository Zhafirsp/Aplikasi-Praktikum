import Container from 'react-bootstrap/Container';

export default function Pengumuman () {
  return (
    <>
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h3 className='fs-3 fw-normal mt-5' style={{ letterSpacing:"7px" }}>SELAMAT UNTUK CALON ASISTEN</h3>
          <h1 className='fs-1 fw-bold mt-3'>LAB - TIF</h1>
          <h3 className='fs-3 fw-normal' style={{ letterSpacing:"7px" }}>YANG TELAH LOLOS SELEKSI</h3>
          <hr/>
          <div className="subtitle">Untuk daftar calon asisten LAB-TIF yang lolos bisa dilihat langsung disini</div>
        </div>
        <table class="table table-bordered text-center" style={{ backgroundColor:"#063554", color:"white", borderRadius:"10px"}}>
          <thead>
            <tr className='fs-2 fw-bold'>
              <th scope="col">No</th>
              <th scope="col">NRP</th>
              <th scope="col">Nama</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
            </tr>
          </tbody>
        </table>
        </Container>
    </section>
    </>
  )
}