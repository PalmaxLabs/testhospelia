"use client";

import React from 'react';
import PropertyCard from './PropertyCard';
import { WasiProperty } from '@/services/wasi';
import { toDestProperty } from '@/utils/propertyUtils';

// Mock data based on typical listings
const MOCK_PROPERTIES = [
  {
    id_property: 101,
    title: "Apartamento de Lujo en El Peñón",
    rent_price: "4500000",
    for_rent: "true",
    city_label: "Cali",
    region_label: "Zona Oeste",
    bedrooms: "2",
    bathrooms: "2",
    main_image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" }
  },
  {
    id_property: 102,
    title: "Loft Moderno Cerca a Unicentro",
    rent_price: "3200000",
    for_rent: "true",
    city_label: "Cali",
    region_label: "Zona Sur",
    bedrooms: "1",
    bathrooms: "1",
    main_image: { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop" }
  },
  {
    id_property: 103,
    title: "Penthouse con Vista a la Ciudad",
    rent_price: "6000000",
    for_rent: "true",
    city_label: "Cali",
    region_label: "Granada",
    bedrooms: "3",
    bathrooms: "3",
    main_image: { url: "https://images.unsplash.com/photo-1512918760513-95f192972701?q=80&w=2060&auto=format&fit=crop" }
  }
];

export default function MockPropertyGrid() {
  return (
    <div className="mt-8">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 text-center">
        <h3 className="text-lg font-bold text-blue-900 mb-2">
          ¿No encuentras lo que buscas?
        </h3>
        <p className="text-blue-700 mb-4">
          Ajusta los filtros (habitaciones, presupuesto) para ver más opciones. Mientras tanto, aquí tienes algunas de nuestras propiedades más populares:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PROPERTIES.map((mock) => (
          <div key={mock.id_property} className="opacity-75 hover:opacity-100 transition-opacity">
            <PropertyCard
              id={mock.id_property.toString()}
              title={mock.title}
              price={`$${parseInt(mock.rent_price).toLocaleString('es-CO')}`}
              location={`${mock.region_label}, ${mock.city_label}`}
              beds={parseInt(mock.bedrooms)}
              baths={parseInt(mock.bathrooms)}
              type="Renta"
              image={mock.main_image.url}
              isNew={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
