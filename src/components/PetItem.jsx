
import React from 'react'
import { Link } from 'react-router-dom'

const PetItem = ({ pet }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{pet.name}</h2>
      <p className="text-gray-600">{pet.description}</p>
      <Link to={`/pets/${pet.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  )
}

export default PetItem
