import Link from 'next/link'

export default function PropertyCard({ property }) {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer">
        
        <img
          src={property.image || '/placeholder.jpg'}
          className="h-52 w-full object-cover"
        />

        <div className="p-4">
          <p className="text-gray-500 text-sm">{property.location}</p>
          
          <h2 className="font-semibold text-lg">
            {property.title}
          </h2>

          <p className="font-bold text-xl mt-2">
            €{property.price}
          </p>
        </div>

      </div>
    </Link>
  )
}
