import { owners } from '~/utils/mocks'

type Props = {
  params: {
    ownerId: string
  }
}

const OwnerPage = ({ params: { ownerId } }: Props) => {
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
