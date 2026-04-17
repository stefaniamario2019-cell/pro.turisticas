'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('properties')
        .select('*')

      if (error) {
        console.log('ERROR SUPABASE:', error)
      } else {
        setProperties(data)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) return <h1>Cargando...</h1>

  return (
    <div style={{ padding: 20 }}>
      <h1>PROPIEDADES</h1>

      {properties?.length === 0 && (
        <p>No hay propiedades en Supabase</p>
      )}

      {properties?.map((p) => (
        <div key={p.id} style={{ marginBottom: 20 }}>
          <h2>{p.title}</h2>
          <p>{p.price} €</p>
          <p>{p.location}</p>
          <p>{p.status}</p>
          {p.image && (
            <img src={p.image} width="300" />
          )}
        </div>
      ))}
    </div>
  )
}
