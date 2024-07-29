// src/pages/PetDetails.jsx
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../AppContext'

const PetDetails = () => {
  const { id } = useParams()
  const { setLoading, setError } = useContext(AppContext)
  const [pet, setPet] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://pets-v2.dev-apis.com/pets?id=${id}`)
      .then((response) => {
        setPet(response.data.pets[0])
        setLoading(false)
      })
      .catch((error) => {
        setError('Failed to fetch pet details')
        setLoading(false)
      })
  }, [id, setLoading, setError])

  if (!pet) {
    return <p>Loading...</p>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{pet.name}</h1>
      <p>{pet.description}</p>
    </div>
  )
}

export default PetDetails
