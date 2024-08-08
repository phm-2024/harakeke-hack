export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-around p-24">
      <form className="flex flex-col">
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          // placeholder="Enter the location of your project"
        />
        <label htmlFor="type">Type of Plant: </label>
        <input
          type="text"
          name="type"
          id="type"
          // placeholder="Plant type"
        />
        <label htmlFor="accessibility">
          How accessible is the location of the plant
        </label>
        <input
          type="text"
          name="accessibility"
          id="accessibility"
          // placeholder="Access to plant"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="flex flex-col justify-center border border-2px border-black bg-slate-300 h-96 w-96 text-center text-2xl">
        <label htmlFor="requirements">Upload project requirements</label>
        <input
          className="flex flex-col justify-center items-center"
          type="file"
          name="requirements"
          id="requirements"
        />
      </div>
    </main>
  )
}
