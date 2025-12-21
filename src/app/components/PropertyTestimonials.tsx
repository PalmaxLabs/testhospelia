import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const REVIEWS = [
  {
    id: 1,
    name: "Ana María",
    date: "Octubre 2023",
    rating: 5,
    comment: "Excelente ubicación y el apartamento es tal cual las fotos. Muy limpio y con todo lo necesario para una estadía cómoda. ¡Recomendado!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    date: "Septiembre 2023",
    rating: 5,
    comment: "El proceso de reserva con Hospelia fue muy seguro y rápido. Me sentí tranquilo con la verificación de la propiedad. Volveré.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Laura Gómez",
    date: "Agosto 2023",
    rating: 4,
    comment: "Muy buena opción para viajes de negocios. El internet es rápido y la zona es tranquila. La atención del anfitrión fue excelente.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

export default function PropertyTestimonials() {
  return (
    <div className="py-8 border-t border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
        <FaStar className="text-yellow-400" /> 
        4.87 · 3 Reseñas
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REVIEWS.map((review) => (
          <div key={review.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image 
                  src={review.avatar} 
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              "{review.comment}"
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="px-6 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Mostrar las 3 reseñas
        </button>
      </div>
    </div>
  );
}
