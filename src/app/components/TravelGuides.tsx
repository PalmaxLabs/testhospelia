"use client";

import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaSearchLocation, FaHandshake, FaArrowRight } from 'react-icons/fa';

const guides = [
  {
    icon: <FaSearchLocation className="w-8 h-8 text-blue-500" />,
    title: "Cómo elegir tu apartamento ideal",
    description: "Guía paso a paso para identificar qué zona y tipo de alojamiento se adapta mejor a tu viaje (negocios, familia o turismo).",
    link: "/blog/como-elegir-apartamento-cali",
    color: "bg-blue-50"
  },
  {
    icon: <FaShieldAltIcon />,
    title: "Checklist de reservas seguras",
    description: "Aprende a identificar propiedades verificadas, evitar estafas y garantizar que tu dinero esté seguro al reservar en línea.",
    link: "/blog/reservas-seguras-cali",
    color: "bg-green-50"
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-purple-500" />,
    title: "Qué esperar al llegar",
    description: "Todo sobre el proceso de check-in, normas de convivencia y tips para vivir como un local en Cali desde el primer día.",
    link: "/blog/que-esperar-llegada-cali",
    color: "bg-purple-50"
  }
];

function FaShieldAltIcon() {
    return (
        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
    )
}

export default function TravelGuides() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Centro de Conocimiento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Consejos expertos para tu estadía
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No solo te ofrecemos alojamiento, te acompañamos con información valiosa para que tu experiencia en Cali sea perfecta y segura.
            </p>
          </div>
          <Link 
            href="/blog"
            className="hidden md:flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Ver todos los artículos <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${guide.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {guide.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {guide.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {guide.description}
              </p>

              <Link 
                href={guide.link}
                className="inline-flex items-center font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Leer guía <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <Link 
            href="/blog"
            className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Ver todos los artículos <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
