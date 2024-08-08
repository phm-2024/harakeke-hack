import fs from 'fs/promises'
import React from 'react'
import Image from 'next/image'

interface Plant {
  name: string
  scientific_name: string
  description: string
  benefits: string
  image_source: string
}

interface Location {
  location: string
}

export default async function Response({ location }: Location) {
  const fileContent = await fs.readFile(process.cwd() + '/data.json', 'utf8')
  const data = JSON.parse(fileContent)
  const plants: Plant[] = data.native_plants[location] || []

  return (
    <>
      <div>
        {plants.map((plant, index) => (
          <div key={index}>
            <h2>
              {plant.name}{' '}
              {plant.scientific_name && `(${plant.scientific_name})`}
            </h2>
            <p>{plant.description}</p>
            <p>
              <strong>Benefits:</strong> {plant.benefits}
            </p>
            <Image
              src={plant.image_source}
              alt={plant.name}
              width={200}
              height={150}
            />
          </div>
        ))}
      </div>
    </>
  )
}
