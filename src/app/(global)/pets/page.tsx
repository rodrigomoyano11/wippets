import Link from 'next/link'

import { pets } from '~/utils/mocks'

const PetsPage = () => (
  <>
    <h1>Pets</h1>

    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          <Link href={`/pets/${pet.id}`}>{pet.name}</Link>

          {pet.deceased && <span> (Deceased)</span>}
          {pet.adopted && <span> (Adopted)</span>}
          {pet.lost && <span> (Lost)</span>}
        </li>
      ))}
    </ul>
  </>
)

export default PetsPage
