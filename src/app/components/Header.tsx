'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import PopupReserva from './PopupReserva';
import Image from 'next/image';
import { trackReservationButtonClick } from '@/utils/googleAds';
import LanguageCurrencySelector from './LanguageCurrencySelector';

// Componente de contador de favoritos
const FavoritesCounter = () => {
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const updateFavoritesCount = () => {
      const savedFavorites = localStorage.getItem('hospelia-favorites');
      if (savedFavorites) {
        const favorites = JSON.parse(savedFavorites);
        setFavoritesCount(favorites.length);
      } else {
        setFavoritesCount(0);
      }
    };

    updateFavoritesCount();
    window.addEventListener('storage', updateFavoritesCount);
    window.addEventListener('favoritesUpdated', updateFavoritesCount);

    return () => {
      window.removeEventListener('storage', updateFavoritesCount);
      window.removeEventListener('favoritesUpdated', updateFavoritesCount);
    };
  }, []);

  if (favoritesCount === 0) {
    return null;
  }

  return (
    <Link href="/favoritos">
      <motion.button 
        className="relative flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        {favoritesCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold min-w-5">
            {favoritesCount > 99 ? '99+' : favoritesCount}
          </span>
        )}
      </motion.button>
    </Link>
  );
};

// Icono hamburguesa animado personalizado
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-7 h-7 flex flex-col justify-center items-center">
    <motion.span
      className="block h-0.5 w-6 bg-current mb-1.5"
      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block h-0.5 w-6 bg-current mb-1.5"
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block h-0.5 w-6 bg-current"
      animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
    />
  </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Controlar el scroll para efectos visuales y comportamiento flotante
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determinar si está scrolled (para efectos visuales)
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determinar visibilidad del navbar (comportamiento flotante)
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up o cerca del top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down y lejos del top
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { 
      href: "/", 
      label: "Inicio",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      href: "/hazte-anfitrion", 
      label: "Hazte anfitrión",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      href: "/blog", 
      label: "Blog",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    }
  ];

  const handleReservaClick = () => {
    trackReservationButtonClick();
    setShowPopup(true);
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className={`backdrop-blur-md transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 shadow-lg py-2' 
            : 'bg-white/80 py-4'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <motion.div 
                className="flex-shrink-0 flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Link href="/" className="text-blue-600 font-bold text-2xl">
                  <img src="/img/logo-hospelia.webp" alt="logo" className="w-auto h-8 sm:h-10" />
                </Link>
              </motion.div>
              
              {/* Menú de escritorio */}
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              {/* Favoritos, Selector de idioma/divisa y Botón CTA Desktop */}
              <div className="hidden md:flex items-center space-x-4">
                <FavoritesCounter />
                <LanguageCurrencySelector />
                <motion.button 
                  className="px-4 lg:px-6 py-2 lg:py-3 border border-transparent rounded-full shadow-md text-sm lg:text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReservaClick}
                >
                  <span className="hidden lg:inline">Reserva ahora</span>
                  <span className="lg:hidden">Reservar</span>
                </motion.button>
              </div>
              
              {/* Favoritos móvil y hamburguesa */}
              <div className="md:hidden flex items-center space-x-2">
                <div className="sm:block hidden">
                  <FavoritesCounter />
                </div>
                <motion.button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative flex items-center justify-center p-3 rounded-full bg-white/10 backdrop-blur-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-all duration-200 border border-gray-200/50"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="sr-only">Abrir menú</span>
                  <HamburgerIcon isOpen={isOpen} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menú móvil de pantalla completa mejorado */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay de fondo */}
            <motion.div
              className="fixed inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/95 to-blue-800/95 backdrop-blur-md z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Contenido del menú */}
            <motion.div
              className="fixed inset-0 z-50 md:hidden flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header del menú móvil */}
              <div className="flex justify-between items-center p-6 bg-white/10 backdrop-blur-sm border-b border-white/20">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <img src="/img/logo-hospelia.webp" alt="logo" className="w-auto h-8" />
                </Link>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Contenido principal del menú */}
              <div className="flex-1 flex flex-col justify-center px-8 py-12">
                {/* Links de navegación */}
                <nav className="space-y-6 mb-12">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 15 
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 text-white group"
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                          {link.icon}
                        </div>
                        <span className="text-xl font-semibold">{link.label}</span>
                        <motion.div
                          className="ml-auto"
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Botón de favoritos en móvil pequeño */}
                <div className="sm:hidden mb-8">
                  <FavoritesCounter />
                </div>

                {/* Selector de idioma/moneda */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                    <LanguageCurrencySelector />
                  </div>
                </motion.div>

                {/* Botón CTA */}
                <motion.button
                  className="w-full py-4 px-8 bg-gradient-to-r from-white to-blue-50 text-blue-600 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-3"
                  onClick={() => {
                    setIsOpen(false);
                    handleReservaClick();
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Reserva ahora</span>
                </motion.button>
              </div>

              {/* Footer del menú */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10">
                <div className="text-center text-white/70 text-sm">
                  <p>© 2024 Hospelia. Todos los derechos reservados.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Popup de Reserva */}
      <PopupReserva isOpen={showPopup} onClose={() => setShowPopup(false)} popupId={22494} />
    </>
  );
} 