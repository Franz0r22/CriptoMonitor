import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="p-5 shadow-md border-b border-gray-500">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <Link href="/" className="text-white text-lg font-bold hover:text-gray-300">
          Criptomonitor
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Inicio
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            Acerca
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;