'use client'

import { useEffect, useState } from 'react'
import HeroSearch from '@/components/HeroSearch'
import PropertiesGrid from '@/components/PropertiesGrid'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [properties, setProperties] = useState([])

  const fetchProperties = async (status) => {
    let query = supabase.from('properties').select('*')

    if (status) {
      query = query.eq('status', status)
    }

    const { data } = await query
    setProperties(data || [])
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
