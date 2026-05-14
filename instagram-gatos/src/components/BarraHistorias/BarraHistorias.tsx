import './BarraHistorias.css'

const historias = [1, 2, 3, 4, 5, 6, 7]

const BarraHistorias = () => {
  return (
    <div className='barra-historias'>
      {historias.map((historia) => (
        <div key={historia} className='historia'>
          <img
            src={`https://i.pravatar.cc/150?img=${historia}`}
            alt='historia'
          />

          <span>gato_{historia}</span>
        </div>
      ))}
    </div>
  )
}

export default BarraHistorias