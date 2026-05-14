import './Encabezado.css'

interface Props {
  cambiarVista: (
    vista: 'feed' | 'perfil'
  ) => void
}

const Encabezado = ({
  cambiarVista,
}: Props) => {
  return (
    <aside className='sidebar'>
      <h1>Catstagram</h1>

      <nav>
        <button
          onClick={() =>
            cambiarVista('feed')
          }
        >
          🏠 Inicio
        </button>

        <button
          onClick={() =>
            cambiarVista('perfil')
          }
        >
          👤 Perfil
        </button>

        <button>
          ❤️ Notificaciones
        </button>

        <button>
          ✉️ Mensajes
        </button>
      </nav>
    </aside>
  )
}

export default Encabezado