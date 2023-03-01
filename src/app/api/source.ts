import { owners, pets, reports } from '~/utils/mocks'

const source = {
  pets: new Map(pets.map((pet) => [pet.id, pet])),
  owners: new Map(owners.map((owner) => [owner.id, owner])),
  reports: new Map(reports.map((report) => [report.id, report])),
}

export default source
