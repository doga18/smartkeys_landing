import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './hero.css'

const Hero = () => {
  return (
    <div className="hero-section bg-light py-5" id="home">
      <Container className="py-5 mt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">SmartKeys</h1>
            <p className="lead">
              Profissionais em chaves e segurança para seu carro, casa ou empresa
              <hr />
              Clique no botão para atendimento ou nos chame no número 51 99855-8430
            </p>
            <Button 
              variant="success" 
              size="lg"
              href="https://wa.me/51998558430"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero