import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


const Contact = () => {
  return (
    <div className="contact-section bg-light py-5" id="contact">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="mb-4">Entre em Contato</h2>
            <p className="lead mb-4">
              Precisa dos nossos serviços? Entre em contato pelo WhatsApp para um atendimento rápido e personalizado.
            </p>
            <Button 
              variant="success" 
              size="lg"
              href="https://wa.me/51998558430"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5"
            >
              Chamar no WhatsApp
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact