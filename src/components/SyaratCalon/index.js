import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testimonials from '../testimonials'

const alurPendaftaran = [
  {
    id: 1,
    icon: 'fas fa-1',
    title: 'Responsive Design',
  },
  {
    id: 2,
    icon: 'fas fa-2',
    title: 'Creative Design',
  },
  {
    id: 3,
    icon: 'fas fa-3',
    title: 'SEO Optimized',
  }
]

function SyaratCalon() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <Row g={0}>
            <Col sm={6} className='holder'>
              <div className="title-holder text-start">
                  <h2>Syarat Umum Calon Asisten</h2>
                  <div className="subtitle">LAB TIF</div>
                </div>
                {
            alurPendaftaran.map(alur => {
              return (
                <Row sm={2} className='holder' key={alur.id}>
                  <div className="icon">
                    <i className={alur.icon}></i>
                  </div>
                  <h3 className='mt-3'>{alur.title}</h3>
                  <p>{alur.description}</p>
                </Row>
                
              );
            })
          }
          <a style={{ width:"400px" }} className="btn btn-primary" href='facebook.com'>Daftar Disini </a>
              
                </Col>
          <Col>
                <Testimonials/>
              </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SyaratCalon;

