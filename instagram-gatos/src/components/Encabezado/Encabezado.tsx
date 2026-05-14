import './Encabezado.css'

interface Props {
  cambiarVista: (vista: 'feed' | 'perfil') => void
}

const Encabezado = ({ cambiarVista }: Props) => {
  return (
    <header className='encabezado'>
      <h1>Catstagram</h1>

      <nav>
        <button onClick={() => cambiarVista('feed')}>
          Inicio
        </button>

        <button onClick={() => cambiarVista('perfil')}>
          Perfil
        </button>
      </nav>
    </header>
  )
}

export default Encabezado