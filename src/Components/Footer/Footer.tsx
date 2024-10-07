import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-4 py-4 bg-dark text-white">
      <Container>
        <p>© 2024 Cripto Monitor - Todos los derechos reservados</p>
      </Container>
    </footer>
  );
};

export default Footer;
