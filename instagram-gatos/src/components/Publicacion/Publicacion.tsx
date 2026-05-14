import { useState } from 'react'

import type { PublicacionType } from '../../types/types'

import './Publicacion.css'

interface Props {
  publicacion: PublicacionType

  abrirModal: (
    publicacion: PublicacionType
  ) => void
}

const Publicacion = ({
  publicacion,
  abrirModal,
}: Props) => {
  const [like, setLike] =
    useState(false)

  const [likes, setLikes] = useState(
    publicacion.likes
  )

  const manejarLike = () => {
    setLike(!like)

    if (!like) {
      setLikes(likes + 1)
    } else {
      setLikes(likes - 1)
    }
  }

  return (
    <article className='publicacion'>
      <div className='publicacion-header'>
        <img
          src={publicacion.avatar}
          alt='avatar'
        />

        <span>
          {publicacion.usuario}
        </span>
      </div>

      <img
        className='imagen-publicacion'
        src={publicacion.imagen}
        alt='gato'
        onClick={() =>
          abrirModal(publicacion)
        }
      />

      <div className='acciones'>
        <button onClick={manejarLike}>
          {like ? '❤️' : '🤍'}
        </button>
      </div>

      <p className='likes'>
        {likes} likes
      </p>

      <p>
        <strong>
          {publicacion.usuario}
        </strong>{' '}
        {publicacion.descripcion}
      </p>

      <span className='fecha'>
        {publicacion.fecha}
      </span>
    </article>
  )
}

export default Publicacion