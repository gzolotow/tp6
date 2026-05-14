import axios from 'axios'

export const obtenerGatos = async () => {
  const respuesta = await axios.get(
    'https://api.thecatapi.com/v1/images/search?limit=10'
  )

  return respuesta.data
}