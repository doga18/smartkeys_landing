import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero-section bg-light py-5" id="home">
      <Container className="py-5 mt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">SmartKeys</h1>
            <p className="lead">
              Soluções profissionais em chaves e segurança para seu carro, casa ou empresa
            </p>
            <Button 
              variant="success" 
              size="lg"
              href="https://wa.me/SEUNUMEROAQUI"
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