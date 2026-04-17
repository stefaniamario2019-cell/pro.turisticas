import { createClient } from '@/lib/supabaseServer'

export default async function PropertyDetail({ params }) {
  const supabase = createClient()

  const { data: property } = await supabase
    .from('properties')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!property) return <div>Propiedad no encontrada</div>

  return (
    <div className="max-w-6xl mx-auto p-6">

      <img
        src={property.image || '/placeholder.jpg'}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-500">{property.location}</p>

        <p className="text-2xl font-bold mt-4">
          €{property.price}
        </p>

        <p className="mt-6 text-gray-700">
          {property.description}
        </p>
      </div>

    </div>
  )
}
