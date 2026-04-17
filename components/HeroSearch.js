'use client'

import { useState } from 'react'

export default function HeroSearch({ onSearch }) {
  const [estado, setEstado] = useState('sale')

  return (
    <div className="relative h-[500px] flex items-center justify-center text-white">
      
      <img
        src="/hero.jpg"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Encuentra tu hogar ideal
        </h1>

        <div className="bg-white text-black rounded-xl p-4 flex gap-3 shadow-xl">
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="sale">Venta</option>
            <option value="rent">Alquiler</option>
          </select>

          <button
            onClick={() => onSearch(estado)}
            className="bg-black text-white px-6 rounded"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  )
}
      
