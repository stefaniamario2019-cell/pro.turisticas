'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function PropertyPage({ params }) {
  const [property, setProperty] = useState(null)

  useEffect(() => {
    const fetchProperty = async () => {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', params.id)
        .single()

      if (!error) {
        setProperty(data)
      } else {
        console.log(error.message)
      }
    }

    fetchProperty()
  }, [params.id])

  if (!property) return <h1>Cargando...</h1>

  return (
    <div style={{ padding: 20 }}>
      <h1>{property.title}</h1>
      <p>{property.price} €</p>
      <p>{property.location}</p>
      <p>{property.description}</p>
      <p>{property.status}</p>

      {property.image && (
        <img src={property.image} width="400" />
      )}
    </div>
  )
}
