"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaCheckCircle, FaStar, FaArrowRight } from "react-icons/fa";

const services = [
  {
    icon: <FaSearch className="w-8 h-8 text-blue-500" />,
    title: "Búsqueda Personalizada",
    description: "No encuentras lo que buscas? Nuestro equipo rastrea el mercado para encontrar tu alojamiento ideal.",
    cta: "Empieza ahora",
    color: "bg-blue-50 hover:bg-blue-100",
    link: "https://wa.me/573017546634?text=Hola,%20me%20interesa%20una%20búsqueda%20personalizada"
  },
  {
    icon: <FaCheckCircle className="w-8 h-8 text-green-500" />,
    title: "Propiedades Verificadas",
    description: "Cada espacio es inspeccionado personalmente. Garantizamos que lo que ves es lo que obtienes.",
    cta: "Ver catálogo",
    color: "bg-green-50 hover:bg-green-100",
    link: "#search"
  },
  {
    icon: <FaStar className="w-8 h-8 text-yellow-500" />,
    title: "Atención VIP",
    description: "Servicio de concierge, transporte y experiencias locales para una estancia inolvidable.",
    cta: "Contactar asesor",
    color: "bg-yellow-50 hover:bg-yellow-100",
    link: "https://wa.me/573017546634?text=Hola,%20quisiera%20más%20información%20sobre%20servicios%20VIP"
  }
];

export default function ServiceCards() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Servicios ofrecidos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`group p-8 rounded-3xl transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-xl ${service.color}`}
          >
            <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <a 
              href={service.link}
              onClick={(e) => {
                if (service.link === '#search') {
                  e.preventDefault();
                  document.querySelector('[data-results-section]')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
            >
              {service.cta} <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
