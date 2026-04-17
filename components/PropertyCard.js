export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow">
      <img
        src={property.image || '/placeholder.jpg'}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">{property.title}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="font-bold mt-2">{property.price} €</p>
      </div>
    </div>
  )
}
