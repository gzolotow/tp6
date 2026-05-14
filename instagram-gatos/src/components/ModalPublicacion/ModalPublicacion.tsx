import type { PublicacionType } from '../../types/types'

import './ModalPublicacion.css'

interface Props {
  publicacion: PublicacionType
  cerrarModal: () => void
}

const ModalPublicacion = ({
  publicacion,
  cerrarModal,
}: Props) => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <button
          className='cerrar'
          onClick={cerrarModal}
        >
          X
        </button>

        <img
          src={publicacion.imagen}
          alt='gato'
        />

        <div className='info-modal'>
          <div className='usuario-modal'>
            <img
              src={publicacion.avatar}
              alt='avatar'
            />

            <h2>
              {publicacion.usuario}
            </h2>
          </div>

          <p>
            {publicacion.descripcion}
          </p>

          <p>
            ❤️ {publicacion.likes} likes
          </p>

          <div className='comentarios'>
            {publicacion.comentarios.map(
              (
                comentario,
                index
              ) => (
                <p key={index}>
                  {comentario}
                </p>
              )
            )}
          </div>

          <span>
            {publicacion.fecha}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ModalPublicacion