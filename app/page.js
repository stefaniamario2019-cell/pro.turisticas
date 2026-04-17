'use client'

import { useEffect, useState } from 'react'
import HeroSearch from '@/components/HeroSearch'
import PropertiesGrid from '@/components/PropertiesGrid'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [properties, setProperties] = useState([])

  const fetchProperties = async (type) => {
    let query = supabase.from('properties').select('*')

    if (type) {
      query = query.eq('type', type)
    }

    const { data, error } = await query

    if (!error) {
      setProperties(data || [])
    }
  }

  useEffect(() => {
    fetchProperties('sale')
  }, [])

  return (
    <>
      <HeroSearch onSearch={fetchProperties} />
      <PropertiesGrid properties={properties} />
    </>
  )
}
