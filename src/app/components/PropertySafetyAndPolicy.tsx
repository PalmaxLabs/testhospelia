import React from 'react';
import { FaFireExtinguisher, FaFirstAid, FaSmokingBan, FaClock, FaBan, FaShieldAlt } from 'react-icons/fa';

export default function PropertySafetyAndPolicy() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-gray-200">
      {/* Safety Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <FaShieldAlt className="text-blue-600" /> Seguridad y Bienestar
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3 text-gray-700">
            <FaFireExtinguisher className="mt-1 text-gray-400" />
            <span>Extintor de incendios disponible en áreas comunes.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <FaFirstAid className="mt-1 text-gray-400" />
            <span>Botiquín de primeros auxilios a solicitud.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <div className="mt-1 text-green-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Propiedad verificada presencialmente por el equipo Hospelia.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <div className="mt-1 text-green-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Limpieza avanzada siguiendo protocolos de desinfección.</span>
          </li>
        </ul>
      </div>

      {/* Policy Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <FaClock className="text-blue-600" /> Políticas de Alojamiento
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Check-in</span>
            <span className="text-gray-900 font-bold">3:00 PM - 9:00 PM</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Check-out</span>
            <span className="text-gray-900 font-bold">11:00 AM</span>
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">Reglas de la casa</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <FaSmokingBan className="text-red-400" /> No fumar dentro de la propiedad
              </li>
              <li className="flex items-center gap-2">
                <FaBan className="text-red-400" /> No se permiten fiestas o eventos ruidosos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
