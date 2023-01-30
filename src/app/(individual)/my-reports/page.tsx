import Link from 'next/link'

import { owners, pets, reports } from '~/utils/mocks'

const [, , , owner] = owners

const MyReportsPage = () => {
  const reportsByOwner = reports.filter((report) => owner.pets.some((pet) => pet === report.petId))
  const getSelectedPet = (petId: string) => pets.find((pet) => pet.id === petId)

  return (
    <>
      <h1>My Reports</h1>

      <ul>
        {reportsByOwner.map((report) => (
          <li key={report.id}>
            <Link href={`/my-reports/report?reportId=${report.id}`}>
              {getSelectedPet(report.petId)?.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MyReportsPage
