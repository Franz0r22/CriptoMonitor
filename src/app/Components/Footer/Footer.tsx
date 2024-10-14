const Footer: React.FC = () => {
  return (
    <footer className="text-white py-4 mt-8 border-t border-gray-500 p-5">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Criptomonitor. Todos los derechos reservados.</p>
        <p>
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