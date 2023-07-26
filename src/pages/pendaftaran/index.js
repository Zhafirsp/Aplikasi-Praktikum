import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Uploader from '../../components/uploader';
import '../../assets/styles/pendaftaran.css'

const liniMasaData = [
  {
    id: 1,
    icon: 'fas fa-1',
    title: 'Pendaftaran Terbuka',
  },
  {
    id: 2,
    icon: 'fas fa-2',
    title: 'Penutupan Pendaftaran',
  },
  {
    id: 3,
    icon: 'fas fa-3',
    title: 'Upload Dokumen dan Seleksi',
  },
  {
    id: 4,
    icon: 'fas fa-4',
    title: 'Pengumuman',
  }
]

export default function Pendaftaran() {
  return (
    <section id="pendaftaran" className="block services-block">
      <Container fluid>
        <div className="title-holder mt-5">
          <h2>SYARAT PENDAFTARAN MELALUI WEB LAB - TIF</h2>
          <div className="subtitle">LAB TIF</div>
        </div>
          {
            liniMasaData.map(liniMasa => {
              return (
                <Row className='holder' key={liniMasa.id}>
                  <div className='icon-pendaftaran'>
                    <i className={liniMasa.icon} style={{ marginLeft:"250px", marginTop:"60px"}}></i>
                  </div>
                  <h3 className='text-center'>{liniMasa.title}</h3>
                </Row>
              );
            })
          }
          <Uploader/>
      </Container>
    </section>
  );
}