import type {
  PublicacionType,
} from '../../types/types'

import Publicacion from '../Publicacion/Publicacion'

import './Feed.css'

interface Props {
  publicaciones: PublicacionType[]

  abrirModal: (
    publicacion: PublicacionType
  ) => void
}

const Feed = ({
  publicaciones,
  abrirModal,
}: Props) => {
  return (
    <main className='feed'>
      {publicaciones.map(
        (publicacion) => (
          <Publicacion
            key={publicacion.id}
            publicacion={
              publicacion
            }
            abrirModal={abrirModal}
          />
        )
      )}
    </main>
  )
}

export default Feed