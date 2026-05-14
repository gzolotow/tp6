import './BarraHistorias.css'

const historias = [
  {
    id: 1,
    nombre: 'michi.dev',
  },
  {
    id: 2,
    nombre: 'gato_loco',
  },
  {
    id: 3,
    nombre: 'catlover',
  },
  {
    id: 4,
    nombre: 'minino',
  },
  {
    id: 5,
    nombre: 'pelusa',
  },
  {
    id: 6,
    nombre: 'gatito',
  },
  {
    id: 7,
    nombre: 'bigotes',
  },
]

const BarraHistorias = () => {
  return (
    <div className='barra-historias'>
      {historias.map((historia) => (
        <div
          key={historia.id}
          className='historia'
        >
          <img
            src={`https://i.pravatar.cc/150?img=${historia.id}`}
            alt='historia'
          />

          <span>
            {historia.nombre}
          </span>
        </div>
      ))}
    </div>
  )
}

export default BarraHistorias