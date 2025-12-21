import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mapa del Sitio | Hospelia',
  description: 'Índice de enlaces internos de Hospelia para facilitar la navegación.',
};

export default function MapaDelSitio() {
  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Alojamientos', href: '/alojamientos' },
    { name: 'Hazte Anfitrión', href: '/hazte-anfitrion' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Ayuda', href: '/ayuda' },
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Accesibilidad', href: '/accesibilidad' },
    { name: 'Empleo', href: '/empleo' },
    { name: 'Prensa', href: '/prensa' },
    { name: 'Centro de Ayuda', href: '/centro-ayuda' },
    { name: 'Recursos para Anfitriones', href: '/recursos-anfitriones' },
    { name: 'Comunidad', href: '/comunidad' },
    { name: 'Experiencias', href: '/experiencias' },
  ];

  const categories = [
    { name: 'Apartamentos amoblados en Cali', href: '/apartamentos-amoblados-en-cali' },
    { name: 'Alquiler temporal en Cali', href: '/alquiler-temporal-en-cali' },
    { name: 'Apartamentos en Bochalema', href: '/apartamentos-en-bochalema' },
    { name: 'Apartamentos en el sur de Cali', href: '/apartamentos-en-el-sur-de-cali' },
    { name: 'Apartamentos por días en Cali', href: '/apartamentos-por-dias-en-cali' },
    { name: 'Airbnb en Cali', href: '/airbnb-en-cali' },
    { name: 'Alojamiento amoblado en Cali', href: '/alojamiento-amoblado-en-cali' },
    { name: 'Apartamentos cerca de Univalle', href: '/apartamentos-cerca-de-univalle' },
    { name: 'Alquiler apartamentos turísticos Cali', href: '/alquiler-apartamentos-turisticos-cali' },
    { name: 'Apartamentos amoblados económicos Cali', href: '/apartamentos-amoblados-economicos-cali' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mapa del Sitio</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">Páginas Principales</h2>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">Zonas y Categorías</h2>
              <ul className="space-y-3">
                {categories.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
