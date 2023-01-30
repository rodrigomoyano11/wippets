import { owners, pets, reports } from '~/utils/mocks'
const [, , , owner] = owners

const MyProfilePage = () => {
  const petsByOwner = pets.filter((pet) => pet.owners.some((petOwner) => petOwner === owner.id))
  const reportsByOwner = reports.filter((report) => owner.pets.some((pet) => pet === report.petId))

  return (
    <>
      <h1>My Profile</h1>

      <div>
        <h2>Owner</h2>
        <p>{`${owner.firstName} ${owner.lastName}`}</p>
        <p>{owner.email}</p>
        <p>{owner.phone}</p>
      </div>

      <div>
        <h2>Pets</h2>
        <ul>
          {petsByOwner.map((pet) => (
            <li key={pet.id}>
              <p>{pet.name}</p>
              <p>{pet.breed}</p>
              <p>{pet.age}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Reports</h2>
        <ul>
          {reportsByOwner.map((report) => (
            <li key={report.id}>
              <h3>{report.type}</h3>
              <p>{report.location}</p>
              <p>{report.description}</p>
              <p>{report.createdAt}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MyProfilePage
