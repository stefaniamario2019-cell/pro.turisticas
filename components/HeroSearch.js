'use client'

import { useState } from 'react'

export default function HeroSearch({ onSearch }) {
  const [estado, setEstado] = useState('Venta')

  return (
    <div className="h-[400px] bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">
        Encuentra tu propiedad ideal
      </h1>

      <div className="bg-white text-black p-4 rounded-xl flex gap-4">
        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          className="border p-2"
        >
          <option>Venta</option>
          <option>Alquiler</option>
        </select>

        <button
          onClick={() => onSearch(estado)}
          className="bg-black text-white px-4 py-2"
        >
          Buscar
        </button>
      </div>
    </div>
  )
}
