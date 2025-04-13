import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Profile() {
  return (
    <Container fluid className='bg-light min-vh-100 pt-5'>
      <Row>
        <Col md={6} lg={5} className='mx-auto text-center'>
            <h2>Perfil del Usuario</h2>
                <p><strong>Email:</strong> usuario@example.com</p> 
              <Button variant='dark'>
                Cerrar Sesión
              </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
