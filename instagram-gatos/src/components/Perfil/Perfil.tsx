import { usuarioLogueado } from '../../data/usuario'

import type { PublicacionType } from '../../types/types'

import './Perfil.css'

interface Props {
  publicaciones: PublicacionType[]
}

const Perfil = ({
  publicaciones,
}: Props) => {
  return (
    <section className='perfil'>
      <div className='perfil-header'>
        <img
          src={usuarioLogueado.avatar}
          alt='avatar'
        />

        <div>
          <h2>
            {usuarioLogueado.nombre}
          </h2>

          <button>
            Editar perfil
          </button>

          <div className='estadisticas'>
            <p>
              <strong>
                {
                  usuarioLogueado.publicaciones
                }
              </strong>{' '}
              publicaciones
            </p>

            <p>
              <strong>
                {
                  usuarioLogueado.seguidores
                }
              </strong>{' '}
              seguidores
            </p>

            <p>
              <strong>
                {usuarioLogueado.seguidos}
              </strong>{' '}
              seguidos
            </p>
          </div>

          <p>{usuarioLogueado.bio}</p>
        </div>
      </div>

      <div className='grid-publicaciones'>
        {publicaciones.map(
          (publicacion) => (
            <img
              key={publicacion.id}
              src={publicacion.imagen}
              alt='gato'
            />
          )
        )}
      </div>
    </section>
  )
}

export default Perfil