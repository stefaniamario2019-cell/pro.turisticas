'use client'

import { useEffect, useState } from 'react'
import HeroSearch from '@/components/HeroSearch'
import PropertiesGrid from '@/components/PropertiesGrid'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [properties, setProperties] = useState([])
  const [estado, setEstado] = useState('Venta')

  const fetchProperties = async (estadoFiltro) => {
    let query = supabase.from('properties').select('*')

    if (estadoFiltro) {
      query = query.eq('status', estadoFiltro.toLowerCase())
    }

    const { data, error } = await query

    if (!error) setProperties(data)
  }

  useEffect(() => {
    fetchProperties(estado)
  }, [])

  return (
    <>
      <HeroSearch
        onSearch={(estadoSeleccionado) => {
          setEstado(estadoSeleccionado)
          fetchProperties(estadoSeleccionado)
        }}
      />

      <PropertiesGrid properties={properties} />
    </>
  )
}
