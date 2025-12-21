"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaShieldAlt, FaBus, FaStar } from 'react-icons/fa';

const neighborhoods = [
  {
    id: 'sur',
    name: 'Zona Sur',
    title: 'El corazón universitario y moderno',
    description: 'La zona sur de Cali es conocida por su ambiente vibrante, cercanía a las principales universidades (Univalle, Javeriana, Icesi) y centros comerciales como Unicentro y Jardín Plaza. Es ideal para estudiantes, profesores y profesionales.',
    safety: 'Alta. Cuenta con vigilancia privada en la mayoría de unidades residenciales y patrullaje constante.',
    mobility: 'Excelente conexión con el sistema MIO. Vías principales como la Calle 5 y la Autopista Sur facilitan el acceso.',
    highlights: ['Unicentro Cali', 'Parque del Ingenio', 'Ciudad Jardín', 'Universidades'],
    image: 'https://images.unsplash.com/photo-1569388330292-7a6a841cd2e6?q=80&w=1000&auto=format&fit=crop', // Replace with local image if available
    link: '/destinos/apartamentos-en-el-sur-de-cali'
  },
  {
    id: 'oeste',
    name: 'Zona Oeste',
    title: 'Exclusividad y brisa fresca',
    description: 'El oeste es la zona más exclusiva de Cali, famosa por su clima fresco, vistas panorámicas y tranquilidad. Aquí encontrarás los mejores restaurantes en El Peñón y Granada, además de museos y el Gato del Río.',
    safety: 'Muy Alta. Es una de las zonas más seguras de la ciudad, con fuerte presencia policial y seguridad privada.',
    mobility: 'Vías rápidas como la Avenida Circunvalar. A pocos minutos del centro pero lejos del ruido.',
    highlights: ['El Peñón', 'Gato de Tejada', 'Cristo Rey', 'Zoológico de Cali'],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop',
    link: '/destinos/apartamentos-zona-oeste'
  },
  {
    id: 'norte',
    name: 'Zona Norte',
    title: 'Negocios y conectividad',
    description: 'El norte es el motor empresarial de Cali, cerca a la zona industrial de Yumbo y el Aeropuerto Alfonso Bonilla Aragón. Ideal para viajeros de negocios y estancias corporativas.',
    safety: 'Media-Alta. Zonas residenciales como La Flora y Vipasa son muy seguras y tranquilas.',
    mobility: 'Salida rápida al aeropuerto y conexión directa con el centro a través de la Avenida Sexta.',
    highlights: ['Centro Empresa', 'Chipichape', 'Barrio Granada', 'Torre de Cali'],
    image: 'https://images.unsplash.com/photo-1599593252723-5020c7e28987?q=80&w=1000&auto=format&fit=crop',
    link: '/destinos/apartamentos-zona-norte'
  }
];

export default function NeighborhoodGuide() {
  const [activeTab, setActiveTab] = useState(neighborhoods[0].id);

  const activeNeighborhood = neighborhoods.find(n => n.id === activeTab) || neighborhoods[0];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Descubre las mejores zonas de Cali
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una guía completa para que elijas el vecindario perfecto para tu estadía, ya sea por negocios, estudio o placer.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {neighborhoods.map((n) => (
            <button
              key={n.id}
              onClick={() => setActiveTab(n.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === n.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {n.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={activeNeighborhood.image}
                  alt={activeNeighborhood.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">{activeNeighborhood.name}</h3>
                    <p className="font-medium text-white/90">{activeNeighborhood.title}</p>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 lg:p-12">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {activeNeighborhood.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 text-blue-700 font-bold">
                      <FaShieldAlt /> Seguridad
                    </div>
                    <p className="text-sm text-blue-900/80">{activeNeighborhood.safety}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 text-green-700 font-bold">
                      <FaBus /> Movilidad
                    </div>
                    <p className="text-sm text-green-900/80">{activeNeighborhood.mobility}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaStar className="text-yellow-400" /> Lugares Destacados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeNeighborhood.highlights.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={activeNeighborhood.link}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors shadow-lg"
                >
                  Ver apartamentos en {activeNeighborhood.name}
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
