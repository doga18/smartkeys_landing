import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';


const Services = () => {
    const services = [
        {
          title: "Chaves Codificadas",
          description: "Programação e cópia de chaves codificadas para diversos modelos de veículos",
          icon: "🚗"
        },
        {
          title: "Cópias de Chaves",
          description: "Cópias de chaves convencionais para residências e comércio",
          icon: "🔑"
        },
        {
          title: "Chaves RFC",
          description: "Especialistas em chaves com tecnologia RFC, TAG's, cartões de acesso e/ou identificação",
          icon: "📱"
        }
      ];
  return (
    <div className="services-section py-5" id="services">
      <Container>
        <h2 className="text-center mb-5">Nossos Serviços</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 text-center shadow-lg border-2 ">
                <Card.Body>
                  <div className="display-4 mb-3">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Services