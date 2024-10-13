const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Criptomonitor. Todos los derechos reservados.</p>
        <p className="mt-2">
          <a href="/privacy" className="text-gray-300 hover:text-white">
            Política de Privacidad
          </a>
          {' | '}
          <a href="/terms" className="text-gray-300 hover:text-white">
            Términos de Servicio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;