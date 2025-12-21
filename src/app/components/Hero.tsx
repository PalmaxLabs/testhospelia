"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { motion } from 'framer-motion';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const banners = [
  { id: 1, src: '/img/banners/banner-apartamentos-amoblados.png', alt: 'Banner Apartamentos Amoblados' }
];

const SearchFiltersBoxDesktop = () => {
  const [location, setLocation] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    // Función de búsqueda
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative mx-auto max-w-4xl w-full hidden md:block"
    >
      {/* Backdrop con blur */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full shadow-2xl" />
      
      {/* Contenedor principal */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-full shadow-2xl border border-gray-200/50 p-2">
        <div className="flex items-center">
          
          {/* Campo Dónde */}
          <div className="flex-1 px-6 py-4 hover:bg-gray-50/80 rounded-full transition-colors cursor-pointer group">
            <div className="space-y-1">
              <label htmlFor="location-input" className="text-xs font-semibold text-gray-700 uppercase tracking-wide block">
                Dónde
              </label>
              <input
                id="location-input"
                type="text"
                placeholder="Explora destinos"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-sm font-medium text-gray-800 bg-transparent border-none outline-none placeholder-gray-500 group-hover:placeholder-gray-600"
                aria-label="Ubicación de destino"
              />
            </div>
          </div>

          {/* Separador */}
          <div className="w-px h-8 bg-gray-300/70" />

          {/* Campo Check-in */}
          <div className="flex-1 px-6 py-4 hover:bg-gray-50/80 rounded-full transition-colors cursor-pointer group">
            <div className="space-y-1">
              <label htmlFor="checkin-input" className="text-xs font-semibold text-gray-700 uppercase tracking-wide block">
                Check-in
              </label>
              <input
                id="checkin-input"
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className="w-full text-sm font-medium text-gray-800 bg-transparent border-none outline-none cursor-pointer"
                placeholder="Agrega fechas"
                aria-label="Fecha de check-in"
              />
              {!checkin && (
                <div className="text-sm text-gray-500 font-normal">Agrega fechas</div>
              )}
            </div>
          </div>

          {/* Separador */}
          <div className="w-px h-8 bg-gray-300/70" />

          {/* Campo Check-out */}
          <div className="flex-1 px-6 py-4 hover:bg-gray-50/80 rounded-full transition-colors cursor-pointer group">
            <div className="space-y-1">
              <label htmlFor="checkout-input" className="text-xs font-semibold text-gray-700 uppercase tracking-wide block">
                Check-out
              </label>
              <input
                id="checkout-input"
                type="date"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className="w-full text-sm font-medium text-gray-800 bg-transparent border-none outline-none cursor-pointer"
                placeholder="Agrega fechas"
                aria-label="Fecha de check-out"
              />
              {!checkout && (
                <div className="text-sm text-gray-500 font-normal">Agrega fechas</div>
              )}
            </div>
          </div>

          {/* Separador */}
          <div className="w-px h-8 bg-gray-300/70" />

          {/* Campo Quién */}
          <div className="flex-1 px-6 py-4 hover:bg-gray-50/80 rounded-full transition-colors cursor-pointer group">
            <div className="space-y-1">
              <label htmlFor="guests-select" className="text-xs font-semibold text-gray-700 uppercase tracking-wide block">
                Quién
              </label>
              <select
                id="guests-select"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full text-sm font-medium text-gray-800 bg-transparent border-none outline-none cursor-pointer appearance-none"
                aria-label="Número de huéspedes"
              >
                <option value="">¿Cuántos?</option>
                <option value="1">1 huésped</option>
                <option value="2">2 huéspedes</option>
                <option value="3">3 huéspedes</option>
                <option value="4">4 huéspedes</option>
                <option value="5">5+ huéspedes</option>
              </select>
            </div>
          </div>

          {/* Botón de búsqueda */}
          <motion.button
            onClick={handleSearch}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 min-w-[60px] min-h-[60px] flex items-center justify-center"
            aria-label="Buscar alojamientos"
            type="button"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 32 32" 
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              aria-hidden="true"
            >
              <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Componente Hero Mobile específico
const MobileHeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-32 px-4 w-full h-full md:hidden relative z-30">
      {/* Badge Superior */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-white text-xs font-semibold">#1 en Alojamientos Corporativos en Cali</span>
      </motion.div>

      {/* Título Principal */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold text-white mb-2 leading-tight">
          Encuentra tu <br />
          <span className="text-blue-400">próximo hogar</span>
        </h1>
        <p className="text-white/90 text-sm font-light leading-relaxed max-w-[280px] mx-auto">
          Descubre apartamentos únicos, completamente equipados y verificados en las mejores zonas de Cali
        </p>
      </motion.div>

      {/* Tarjeta de Búsqueda Circular */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-[320px] bg-white rounded-[2rem] p-1 shadow-2xl"
      >
        <div className="bg-white rounded-[1.8rem] p-5 space-y-4">
          {/* Destino */}
          <div className="border-b border-gray-100 pb-3">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">DESTINO</label>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="font-bold text-gray-900">Cali, Colombia</span>
            </div>
          </div>

          {/* Espacio */}
          <div className="border-b border-gray-100 pb-3">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">ESPACIO</label>
            <div className="font-bold text-gray-900">Cualquier tamaño</div>
          </div>

          {/* Presupuesto */}
          <div className="pb-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">PRESUPUESTO</label>
            <div className="font-bold text-gray-900">Cualquier precio</div>
          </div>
        </div>

        {/* Botón Buscar */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-[1.5rem] flex items-center justify-center gap-2 transition-colors mt-1 shadow-lg">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Buscar
        </button>
      </motion.div>

      {/* Badge Inferior */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
      >
        <div className="bg-green-500 rounded-full p-0.5">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-white text-xs font-medium">Propiedades Verificadas</span>
      </motion.div>
    </div>
  );
};

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    fade: true, 
    cssEase: 'linear',
    arrows: false, 
    pauseOnHover: true,
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const slideVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="relative w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-10 pointer-events-none" />
      
      {/* Contenido Hero Mobile (Diseño nuevo) */}
      <MobileHeroContent />

      {/* Contenido Hero Desktop (Diseño original) */}
      <div className="absolute inset-0 z-20 hidden md:flex flex-col items-center justify-center px-4">
        {/* Título Desktop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white/90 text-sm font-semibold mb-8 text-center"
        >
          ✨ Encuentra tu hogar perfecto en Cali
        </motion.div>

        {/* Box de filtros Desktop */}
        <SearchFiltersBoxDesktop />
      </div>
      
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div 
            key={banner.id} 
            className="relative w-full"
          >
            <div className="relative h-[100vh] md:h-[600px] overflow-hidden">
              <Image
                src={banner.src}
                alt={banner.alt}
                width={1920}
                height={600}
                priority={index === 0}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              
              {/* Overlay con gradiente suave */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
              
              {/* Contenido centrado (Solo Desktop) */}
              <div className="absolute inset-0 hidden md:flex items-center justify-center px-4">
                <div className="text-center text-white max-w-4xl mx-auto">
                  <h1
                    className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  >
                    Hospelia.co
                  </h1>
                  
                  <p
                    className="text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                  >
                    Encuentra apartamentos amoblados, céntricos y con todas las comodidades en Cali
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Elementos decorativos animados */}
      <motion.div 
        className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-70"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-6 h-6 bg-blue-300 rounded-full opacity-60"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );
} 
