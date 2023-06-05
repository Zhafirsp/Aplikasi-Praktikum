import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-1',
    title: 'Responsive Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 2,
    icon: 'fas fa-2',
    title: 'Creative Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 3,
    icon: 'fas fa-3',
    title: 'SEO Optimized',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 4,
    icon: 'fas fa-4',
    title: 'Retina Ready',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  }
]

function LiniMasa() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Lini Masa Calon Asisten Lab</h2>
          <div className="subtitle">LAB TIF</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={6} className='holder' key={services.id}>
                  <div className='icon position-relative top-30 start-50 translate-middle'>
                    <i className={services.icon}></i>
                  </div>
                  <h3 className='text-center'>{services.title}</h3>
                  <p className='text-center pb-5'>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default LiniMasa;