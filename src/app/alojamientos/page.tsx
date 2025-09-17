import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alojamientos - Hospelia',
  description: 'Encuentra los mejores alojamientos en Colombia con Hospelia',
};

export default function AlojamientosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Alojamientos
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Descubre los mejores alojamientos en Colombia
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700">
              Esta página está en construcción. Pronto podrás explorar todos nuestros alojamientos disponibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 