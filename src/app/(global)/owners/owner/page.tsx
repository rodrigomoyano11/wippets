'use client'

import { useSearchParams } from 'next/navigation'

import { owners } from '~/utils/mocks'

const OwnerPage = () => {
  const searchParams = useSearchParams()
  const ownerId = searchParams.get('ownerId')

  const foundOwner = owners.find((owner) => owner.id === ownerId)

  return (
    <>
      <h1>Owner</h1>

      <div>
        {foundOwner && <p>{`${foundOwner?.firstName} ${foundOwner?.lastName}`}</p>}
        <p>{foundOwner?.email}</p>
        <p>{foundOwner?.phone}</p>
      </div>
    </>
  )
}

export default OwnerPage
