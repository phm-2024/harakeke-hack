'use client'

import { useState } from 'react'

export default function Home() {
  const [response, setResponse] = useState(false)

  function handleSubmti() {
    setResponse(true)
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-around p-24">
      <form className="flex flex-col" onSubmit={handleSubmti}>
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          className="mb-2 border border-2px border-green"
          // placeholder="Enter the location of your project"
        />
        <label htmlFor="type">Type of Plant: </label>
        <input
          type="text"
          name="type"
          id="type"
          className="mb-2 border border-2px border-green"
          // placeholder="Plant type"
        />
        <label htmlFor="accessibility">
          How accessible is the location of the plant
        </label>
        <input
          type="text"
          name="accessibility"
          id="accessibility"
          className="mb-2 border border-2px border-green"
          // placeholder="Access to plant"
        />
        <button
          type="submit"
          className="button-3"
          // onClick={() => setResponse(true)}
        >
          Submit
        </button>
      </form>
      <div className="flex flex-col justify-center border border-2px border-black h-96 w-96 text-center text-2xl">
        <label htmlFor="requirements">Upload project requirements</label>
        <input
          className="ml-8"
          type="file"
          name="requirements"
          id="requirements"
        />
      </div>
    </main>
  )
}
