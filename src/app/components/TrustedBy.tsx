"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBuilding, FaArrowRight } from 'react-icons/fa';

const companies = [
  {
    name: 'Cruz Roja Colombiana',
    logo: 'https://wp.hospelia.co/wp-content/uploads/2025/04/LOGO-ORG-VERTICAL.png',
    description: 'Alojamiento para brigadas de emergencia',
    useCase: 'Estancias de equipo (15-30 días)',
    url: 'https://www.cruzrojacolombiana.org/'
  },
  {
    name: 'DHL',
    logo: 'https://wp.hospelia.co/wp-content/uploads/2025/04/dhl-logo.svg',
    description: 'Hospedaje para ejecutivos logísticos',
    useCase: 'Reubicación temporal',
    url: 'https://www.dhl.com/co-es/home.html'
  },
  {
    name: 'Cantina La 15',
    logo: 'https://wp.hospelia.co/wp-content/uploads/2025/04/Logo-original-600x117-1.png',
    description: 'Alojamiento para staff de apertura',
    useCase: 'Proyectos corporativos',
    url: 'https://www.cantinala15.com/'
  },
  {
    name: 'Belanova',
    logo: 'https://wp.hospelia.co/wp-content/uploads/2025/04/309050360_619774439742027_3124979860421283267_n.png',
    description: 'Hospedaje para consultores de salud',
    useCase: 'Estancias médicas',
    url: 'https://belanovacare.com/'
  },
  {
    name: 'Industrias Pintumel',
    logo: 'https://wp.hospelia.co/wp-content/uploads/2025/04/Captura-de-pantalla-2025-04-15-223041.png',
    description: 'Alojamiento para ingenieros de planta',
    useCase: 'Proyectos industriales',
    url: 'https://www.pintumel.com/'
  },
];

export default function TrustedBy() {
  return (
    <motion.section 
      className="py-20 bg-gray-50 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4 border border-blue-100"
          >
            Nuestros Aliados
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Empresas y marcas que confían en Hospelia para hospedaje corporativo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Soluciones de alojamiento corporativo adaptadas a cada necesidad
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="h-20 flex items-center justify-start mb-6 border-b border-gray-50 pb-4">
                <Image
                  src={company.logo}
                  alt={`Logo de ${company.name}`}
                  width={120}
                  height={50}
                  className="max-h-full w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <div className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                  {company.useCase}
                </div>
                <h3 className="font-semibold text-gray-900">{company.name}</h3>
                <p className="text-sm text-gray-600">{company.description}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Card de CTA para Empresas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-blue-600 rounded-2xl p-8 shadow-lg flex flex-col justify-center items-start text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500 rounded-full blur-2xl opacity-50"></div>
            
            <FaBuilding className="w-10 h-10 mb-4 text-blue-200" />
            <h3 className="text-xl font-bold mb-2">¿Necesitas alojamiento corporativo?</h3>
            <p className="text-blue-100 text-sm mb-6">Gestionamos el hospedaje de tu equipo con tarifas preferenciales y facturación simplificada.</p>
            
            <a 
              href="https://wa.me/573017546634?text=Hola,%20me%20interesa%20una%20propuesta%20corporativa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors w-full justify-center"
            >
              Solicitar propuesta <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
