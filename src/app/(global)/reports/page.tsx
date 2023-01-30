import Link from 'next/link'

import { pets, reports } from '~/utils/mocks'

const ReportsPage = () => {
  const getSelectedPet = (petId: string) => pets.find((pet) => pet.id === petId)

  return (
    <>
      <h1>Reports</h1>

      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <Link href={`/reports/${report.id}`}>{getSelectedPet(report.petId)?.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ReportsPage
