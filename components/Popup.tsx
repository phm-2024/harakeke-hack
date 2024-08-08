import { SetStateAction } from 'react'
import data from '../data.json'

interface Props {
  setResponse: (value: SetStateAction<boolean>) => void
}

export default function Popup({ setResponse }: Props) {
  function close() {
    setResponse(false)
  }

  const solutions = data.native_plants
  console.log(data.native_plants)

  return (
    <section className="popup-overlay">
      <div className="popup">
        <h1>Suggestions</h1>
        <button onClick={close} className="close">
          x
        </button>
        <div className="flex flex-wrap justify-center">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="border border-2px border-emerald-500 m-5 w-96 h-[30em] bg-white"
            >
              <h2>{solution.name}</h2>
              <h3>
                <em>{solution.scientific_name}</em>
              </h3>
              <p>{solution.description}</p>
              <h3>Benefits:</h3>
              <p>{solution.benefits}</p>
              <img src={solution.image_source} alt={solution.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// resource consent
// offsetting
// health and safety accessibility
// H&S - poisonous plants
// water treatment - soaking requriements
// beca
