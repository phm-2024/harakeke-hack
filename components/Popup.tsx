import { SetStateAction } from 'react'

interface Props {
  setResponse: (value: SetStateAction<boolean>) => void
}

export default function Popup({ setResponse }: Props) {
  function close() {
    setResponse(false)
  }
  return (
    <section className="popup-overlay">
      <div className="popup">
        <button onClick={close}></button>
        <h1>hello</h1>
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
