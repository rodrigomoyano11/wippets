import Link from 'next/link'

import { owners } from '~/utils/mocks'

const OwnersPage = () => (
  <>
    <h1>Owners</h1>

    <ul>
      {owners.map((owner) => (
        <li key={owner.id}>
          <Link href={`/owners/owner?ownerId=${owner.id}`}>
            {`${owner.firstName} ${owner.lastName}`}
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default OwnersPage
