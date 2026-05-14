import { useEffect, useState } from 'react'

import BarraHistorias from './components/BarraHistorias/BarraHistorias'
import Cargando from './components/Cargando/Cargando'
import Encabezado from './components/Encabezado/Encabezado'
import Feed from './components/Feed/Feed'
import ModalPublicacion from './components/ModalPublicacion/ModalPublicacion'
import Perfil from './components/Perfil/Perfil'

import { captions } from './data/captions'
import { comentariosFake } from './data/comentarios'

import { obtenerGatos } from './services/servicioApi'

import type {
  GatoApi,
  PublicacionType,
} from './types/types'

function App() {
  const [publicaciones, setPublicaciones] =
    useState<PublicacionType[]>([])

  const [cargando, setCargando] =
    useState(true)

  const [vista, setVista] = useState<
    'feed' | 'perfil'
  >('feed')

  const [
    publicacionSeleccionada,
    setPublicacionSeleccionada,
  ] = useState<PublicacionType | null>(
    null
  )

  useEffect(() => {
    const cargarPublicaciones = async () => {
      try {
        const data = await obtenerGatos()

        const publicacionesTransformadas =
          data.map(
            (
              gato: GatoApi,
              index: number
            ) => ({
              id: gato.id,

              imagen: gato.url,

              usuario: `gato_${
                index + 1
              }`,

              avatar: `https://i.pravatar.cc/150?img=${
                index + 10
              }`,

              descripcion:
                captions[
                  index % captions.length
                ],

              likes: Math.floor(
                Math.random() * 1000
              ),

              comentarios:
                comentariosFake,

              fecha: 'Hace 2 horas',
            })
          )

        setPublicaciones(
          publicacionesTransformadas
        )
      } catch (error) {
        console.log(error)
      } finally {
        setCargando(false)
      }
    }

    cargarPublicaciones()
  }, [])

  if (cargando) {
    return <Cargando />
  }

  return (
    <>
      <Encabezado cambiarVista={setVista} />

      {vista === 'feed' && (
        <>
          <BarraHistorias />

          <Feed
            publicaciones={publicaciones}
            abrirModal={
              setPublicacionSeleccionada
            }
          />
        </>
      )}

      {vista === 'perfil' && (
        <Perfil
          publicaciones={publicaciones}
        />
      )}

      {publicacionSeleccionada && (
        <ModalPublicacion
          publicacion={
            publicacionSeleccionada
          }
          cerrarModal={() =>
            setPublicacionSeleccionada(
              null
            )
          }
        />
      )}
    </>
  )
}
<footer
  style={{
    textAlign: 'center',
    padding: '30px',
    color: 'gray',
  }}
>
  Catstagram © 2026
</footer>
export default App