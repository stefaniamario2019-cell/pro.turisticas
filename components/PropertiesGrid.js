import PropertyCard from './PropertyCard'

export default function PropertiesGrid({ properties }) {
  if (!properties) return <p>Cargando...</p>

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  )
}
