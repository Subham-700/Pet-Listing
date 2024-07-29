// src/services/api.js
import axios from 'axios'

const API_BASE_URL = 'http://pets-v2.dev-apis.com'

export const fetchPets = () => {
  return axios.get(`${API_BASE_URL}/pets`)
}

export const fetchPetById = (id) => {
  return axios.get(`${API_BASE_URL}/pets?id=${id}`)
}

export const fetchBreedsByAnimal = (animal) => {
  return axios.get(`${API_BASE_URL}/breeds?animal=${animal}`)
}

export const searchPets = (animal, location, breed) => {
  return axios.get(
    `${API_BASE_URL}/pets?animal=${animal}&location=${location}&breed=${breed}`
  )
}
