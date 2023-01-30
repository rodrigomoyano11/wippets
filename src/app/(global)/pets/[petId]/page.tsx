import { pets } from '~/utils/mocks'

type Props = {
  params: {
    petId: string
  }
}

const PetPage = ({ params: { petId } }: Props) => {
  const foundPet = pets.find((pet) => pet.id === petId)

  return (
    <div>
      <h1>{foundPet?.name}</h1>
      <p>{foundPet?.description}</p>

      <p>
        <strong>Breed:</strong> {foundPet?.breed}
      </p>
      <p>
        <strong>Color:</strong> {foundPet?.color}
      </p>
      <p>
        <strong>Weight:</strong> {foundPet?.weight}
      </p>
      <p>
        <strong>Age:</strong> {foundPet?.age}
      </p>
      <p>
        <strong>Owner:</strong> {foundPet?.owner}
      </p>
    </div>
  )
}

export default PetPage
