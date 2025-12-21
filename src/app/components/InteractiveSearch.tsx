"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaBed, FaMoneyBillWave } from "react-icons/fa";

interface InteractiveSearchProps {
  filters: any;
  handleFilterChange: (key: string, value: any) => void;
  onSearch: () => void;
}

const POPULAR_ZONES = [
  "Cali - Zona Sur",
  "Cali - Zona Oeste",
  "Cali - Zona Norte",
  "Cali - Centro",
  "Cali - Ciudad Jardín",
  "Cali - El Peñón",
  "Cali - Granada",
  "Cali - San Fernando"
];

const SUGGESTIONS = [
  { label: "Centrado en el centro", value: "Centro" },
  { label: "Cerca de la universidad", value: "Zona Sur" },
  { label: "Zona gastronómica", value: "Granada" },
];

export default function InteractiveSearch({ filters, handleFilterChange, onSearch }: InteractiveSearchProps) {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState(filters.search || "");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setActiveField(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    handleFilterChange("search", e.target.value);
    setShowSuggestions(true);
  };

  const selectZone = (zone: string) => {
    setSearchValue(zone);
    handleFilterChange("search", zone);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto" ref={searchRef}>
      <motion.div 
        className="bg-white rounded-3xl shadow-2xl p-2 flex flex-col md:flex-row gap-2 relative z-50"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Destination Field */}
        <div 
          className={`relative flex-1 p-4 rounded-2xl transition-colors cursor-pointer ${activeField === 'destination' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
          onClick={() => { setActiveField('destination'); setShowSuggestions(true); }}
        >
          <label htmlFor="destino" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Dónde</label>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-400" />
            <input
              id="destino"
              type="text"
              value={searchValue}
              onChange={handleSearchInput}
              placeholder="Explora destinos en Cali"
              className="w-full bg-transparent font-bold text-gray-900 outline-none placeholder-gray-400"
            />
          </div>
          
          {/* Autocomplete Dropdown */}
          <AnimatePresence>
            {showSuggestions && activeField === 'destination' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-full md:w-[300px] bg-white rounded-2xl shadow-xl mt-4 p-4 overflow-hidden z-50 border border-gray-100"
              >
                <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">Destinos populares</p>
                <ul className="space-y-2">
                  {POPULAR_ZONES.filter(z => z.toLowerCase().includes(searchValue.toLowerCase())).map((zone, idx) => (
                    <li 
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); selectZone(zone); }}
                      className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                        <FaMapMarkerAlt size={12} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{zone}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:block w-px bg-gray-200 my-2"></div>

        {/* Bedrooms Field */}
        <div 
          className={`relative flex-1 md:max-w-[200px] p-4 rounded-2xl transition-colors cursor-pointer ${activeField === 'bedrooms' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
          onClick={() => setActiveField('bedrooms')}
        >
          <label htmlFor="habitaciones" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Habitaciones</label>
          <div className="flex items-center gap-2">
            <FaBed className="text-gray-400" />
            <select
              id="habitaciones"
              value={filters.bedrooms || ''}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value ? parseInt(e.target.value) : undefined)}
              className="w-full bg-transparent font-bold text-gray-900 outline-none cursor-pointer appearance-none"
              onClick={(e) => e.stopPropagation()}
            >
              <option value="">Cualquiera</option>
              <option value="1">1 Habitación</option>
              <option value="2">2 Habitaciones</option>
              <option value="3">3+ Habitaciones</option>
            </select>
          </div>
        </div>

        <div className="hidden md:block w-px bg-gray-200 my-2"></div>

        {/* Budget Field */}
        <div 
          className={`relative flex-1 p-4 rounded-2xl transition-colors cursor-pointer ${activeField === 'budget' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
          onClick={() => setActiveField('budget')}
        >
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Presupuesto</label>
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-gray-400" />
            <select
              value={filters.min_price === 2800000 && filters.max_price === 3600000 ? '2.8-3.6' : filters.min_price === 4000000 ? '4+' : ''}
              onChange={(e) => {
                const value = e.target.value;
                if (value === '2.8-3.6') {
                  handleFilterChange('min_price', 2800000);
                  handleFilterChange('max_price', 3600000);
                } else if (value === '4+') {
                  handleFilterChange('min_price', 4000000);
                  handleFilterChange('max_price', undefined);
                } else {
                  handleFilterChange('min_price', undefined);
                  handleFilterChange('max_price', undefined);
                }
              }}
              className="w-full bg-transparent font-bold text-gray-900 outline-none cursor-pointer appearance-none"
              onClick={(e) => e.stopPropagation()}
            >
              <option value="">Cualquier precio</option>
              <option value="2.8-3.6">$2.8M - $3.6M</option>
              <option value="4+">$4.0M+</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-colors min-w-[120px]"
        >
          <FaSearch />
          <span>Buscar</span>
        </motion.button>
      </motion.div>

      {/* Suggestions Pills */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-3 mt-6 justify-center"
      >
        {SUGGESTIONS.map((s, idx) => (
          <button
            key={idx}
            onClick={() => {
                // If it's a zone, set search. If it's something else, we might need other logic, but for now map to search or simple logic
                if (s.value === "Centro" || s.value === "Zona Sur" || s.value === "Granada") {
                    selectZone(s.value);
                }
            }}
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full transition-colors flex items-center gap-2"
          >
            <FaSearch size={10} />
            {s.label}
          </button>
        ))}
      </motion.div>
    </div>
  );
}
