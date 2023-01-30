import Link from 'next/link'

import { owners, pets } from '~/utils/mocks'
const [, , , owner] = owners

const MyPetsPage = () => {
  const petsByOwner = pets.filter((pet) => pet.owners.some((petOwner) => petOwner === owner.id))

  return (
    <>
      <h1>My Pets</h1>

      <ul>
        {petsByOwner.map((pet) => (
          <li key={pet.id}>
            <Link href={`/my-pets/${pet.id}`}>{pet.name}</Link>

            {pet.deceased && <span> (Deceased)</span>}
            {pet.adopted && <span> (Adopted)</span>}
            {pet.lost && <span> (Lost)</span>}
          </li>
        ))}
      </ul>
    </>
  )
}

export default MyPetsPage
