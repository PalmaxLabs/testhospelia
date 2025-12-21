import Link from 'next/link';
import { FaHome, FaUserPlus, FaBlog, FaCity } from 'react-icons/fa';

export default function InternalLinksSection() {
  const links = [
    {
      title: 'Alojamientos en Cali',
      description: 'Encuentra los mejores apartamentos amoblados y hospedajes verificados en las zonas más exclusivas de Cali.',
      href: '/alojamientos',
      icon: <FaHome className="w-6 h-6 text-blue-500" />,
      anchorText: 'Ver Alojamientos en Cali'
    },
    {
      title: 'Hazte Anfitrión en Cali',
      description: 'Genera ingresos extras alquilando tu propiedad con Hospelia. Nos encargamos de toda la gestión.',
      href: '/hazte-anfitrion',
      icon: <FaUserPlus className="w-6 h-6 text-green-500" />,
      anchorText: 'Conviértete en Anfitrión'
    },
    {
      title: 'Blog de Turismo en Cali',
      description: 'Descubre guías de viaje, consejos locales y las últimas novedades sobre el turismo y eventos en la ciudad.',
      href: '/blog',
      icon: <FaBlog className="w-6 h-6 text-purple-500" />,
      anchorText: 'Leer Blog Cali'
    },
    {
      title: 'Hospedaje por Zonas',
      description: 'Explora nuestras propiedades organizadas por barrios: Sur de Cali, Oeste, Peñón, Granada y más.',
      href: '/alojamientos?search=Cali',
      icon: <FaCity className="w-6 h-6 text-orange-500" />,
      anchorText: 'Explorar Zonas de Cali'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explora Hospelia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navega por nuestras secciones principales para encontrar el alojamiento perfecto o aprender más sobre nuestra comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col h-full p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 bg-white p-3 rounded-xl inline-block w-fit shadow-sm border border-gray-100">
                {link.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{link.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                {link.description}
              </p>
              <Link 
                href={link.href}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                {link.anchorText}
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
