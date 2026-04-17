import PropertyCard from './PropertyCard'

export default function PropertiesGrid({ properties }) {
  if (!properties) return <p className="p-6">Cargando...</p>

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-8">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  )
}
