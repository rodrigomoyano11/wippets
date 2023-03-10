type Pet = {
  id: string
  owners: string[]
  reports: string[]

  name: string
  breed: string
  age: number
  weight: number
  color: string
  sex: 'male' | 'female'
  description: string
  image: string
  owner: string
  createdAt: number
  updatedAt: number

  lost: boolean
  lostDate: string | null
  lostLocation: string | null

  found: boolean
  foundDate: string | null
  foundLocation: string | null

  availableToAdopt: boolean
  adopted: boolean | null
  adoptedDate: string | null
  adoptedBy: string | null

  deceased: boolean
  deceasedDate: string | null
  deceasedCause: string | null
}

type Owner = {
  id: string
  pets: string[]
  reports: string[]

  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  country: string
  zip: string
}

type Report = {
  id: string
  petId: string
  createdAt: number
  updatedAt: number
  type: 'lost' | 'found' | 'adopted' | 'deceased' | 'injured'
  description: string
  location: string
  resolved: boolean
  resolvedAt: number | null
  resolvedBy: string | null
}

const pets: Pet[] = [
  {
    id: '1',
    owners: ['1'],
    reports: [],
    name: 'Fluffy',
    breed: 'Golden Retriever',
    age: 3,
    weight: 60,
    color: 'Golden',
    sex: 'female',
    description:
      'Fluffy is a friendly and playful Golden Retriever. She loves going for walks and playing fetch.',
    image: 'https://example.com/fluffy.jpg',
    owner: 'John Smith',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: false,
    lostDate: null,
    lostLocation: null,
    found: false,
    foundDate: null,
    foundLocation: null,
    availableToAdopt: false,
    adopted: null,
    adoptedDate: null,
    adoptedBy: null,
    deceased: false,
    deceasedDate: null,
    deceasedCause: null,
  },
  {
    id: '2',
    owners: ['4', '7'],
    reports: ['1'],
    name: 'Charlie',
    breed: 'Labrador Retriever',
    age: 2,
    weight: 55,
    color: 'Yellow',
    sex: 'male',
    description:
      'Charlie is a friendly and energetic Labrador Retriever. He is great with children and loves to play.',
    image: 'https://example.com/charlie.jpg',
    owner: 'Ashley Davis',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: true,
    lostDate: '2022-07-01',
    lostLocation: 'Central Park, NY',
    found: true,
    foundDate: '2022-07-05',
    foundLocation: 'Battery Park, NY',
    availableToAdopt: false,
    adopted: null,
    adoptedDate: null,
    adoptedBy: null,
    deceased: false,
    deceasedDate: null,
    deceasedCause: null,
  },
  {
    id: '3',
    owners: ['3'],
    reports: ['4', '1'],
    name: 'Buddy',
    breed: 'Labrador Retriever',
    age: 5,
    weight: 75,
    color: 'Chocolate',
    sex: 'male',
    description:
      'Buddy is a friendly and energetic Labrador Retriever. He loves to play and is great with children.',
    image: 'https://example.com/buddy.jpg',
    owner: 'Jane Doe',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: false,
    lostDate: null,
    lostLocation: null,
    found: false,
    foundDate: null,
    foundLocation: null,
    availableToAdopt: true,
    adopted: null,
    adoptedDate: null,
    adoptedBy: null,
    deceased: false,
    deceasedDate: null,
    deceasedCause: null,
  },
  {
    id: '4',
    owners: ['5', '4'],
    reports: ['4'],
    name: 'Whiskers',
    breed: 'Siamese',
    age: 2,
    weight: 8,
    color: 'Cream',
    sex: 'male',
    description:
      'Whiskers is a playful and affectionate Siamese cat. He loves to cuddle and play with string toys.',
    image: 'https://example.com/whiskers.jpg',
    owner: 'Mary Johnson',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: true,
    lostDate: '2022-01-01',
    lostLocation: '123 Main St.',
    found: false,
    foundDate: null,
    foundLocation: null,
    availableToAdopt: false,
    adopted: null,
    adoptedDate: null,
    adoptedBy: null,
    deceased: false,
    deceasedDate: null,
    deceasedCause: null,
  },
  {
    id: '5',
    owners: ['4'],
    reports: ['5', '2'],
    name: 'Nemo',
    breed: 'Clownfish',
    age: 1,
    weight: 0.5,
    color: 'Orange',
    sex: 'male',
    description:
      'Nemo is a beautiful and vibrant clownfish. He is very active and loves to swim around in his tank.',
    image: 'https://example.com/nemo.jpg',
    owner: 'Bob Roberts',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: false,
    lostDate: null,
    lostLocation: null,
    found: false,
    foundDate: null,
    foundLocation: null,
    availableToAdopt: false,
    adopted: null,
    adoptedDate: null,
    adoptedBy: null,
    deceased: false,
    deceasedDate: null,
    deceasedCause: null,
  },
  {
    id: '6',
    owners: ['5'],
    reports: ['2'],
    name: 'Max',
    breed: 'Golden Retriever',
    age: 3,
    weight: 65,
    color: 'Golden',
    sex: 'male',
    description:
      'Max is a friendly and loyal Golden Retriever. He is great with children and makes a great companion.',
    image: 'https://example.com/max.jpg',
    owner: 'John Smith',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: false,
    lostDate: null,
    lostLocation: null,
    found: false,
    foundDate: null,
    foundLocation: null,
    availableToAdopt: false,
    adopted: true,
    adoptedDate: '2022-05-01',
    adoptedBy: 'Jane Smith',
    deceased: false,
    deceasedDate: null,
    deceasedCause: null,
  },
  {
    id: '7',
    owners: ['6'],
    reports: ['3', '5'],
    name: 'Max',
    breed: 'Golden Retriever',
    age: 8,
    weight: 65,
    color: 'Golden',
    sex: 'male',
    description:
      'Max is a friendly and loyal Golden Retriever. He was a great companion and loved to play fetch.',
    image: 'https://example.com/max.jpg',
    owner: 'John Smith',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: false,
    lostDate: null,
    lostLocation: null,
    found: false,
    foundDate: null,
    foundLocation: null,
    availableToAdopt: false,
    adopted: false,
    adoptedDate: null,
    adoptedBy: null,
    deceased: true,
    deceasedDate: '2022-12-01',
    deceasedCause: 'Old age',
  },
  {
    id: '8',
    owners: ['4'],
    reports: ['3'],
    name: 'Bella',
    breed: 'Shih Tzu',
    age: 5,
    weight: 15,
    color: 'White and Brown',
    sex: 'female',
    description:
      'Bella is a sweet and playful Shih Tzu. She is great with children and makes a great companion.',
    image: 'https://example.com/bella.jpg',
    owner: 'Jessica Garcia',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: true,
    lostDate: '2022-08-15',
    lostLocation: 'Union Square, NY',
    found: true,
    foundDate: '2022-08-20',
    foundLocation: 'Madison Square Park, NY',
    availableToAdopt: false,
    adopted: null,
    adoptedDate: null,
    adoptedBy: null,
    deceased: false,
    deceasedDate: null,
    deceasedCause: null,
  },
  {
    id: '9',
    owners: ['3', '7', '10'],
    reports: ['5'],
    name: 'Daisy',
    breed: 'Beagle',
    age: 4,
    weight: 30,
    color: 'Brown and White',
    sex: 'female',
    description:
      'Daisy is a sweet and friendly Beagle. She is great with children and loves to play.',
    image: 'https://example.com/daisy.jpg',
    owner: 'Eric Johnson',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: false,
    lostDate: null,
    lostLocation: null,
    found: false,
    foundDate: null,
    foundLocation: null,
    availableToAdopt: false,
    adopted: true,
    adoptedDate: '2022-06-15',
    adoptedBy: 'Michael Brown',
    deceased: false,
    deceasedDate: null,
    deceasedCause: null,
  },
  {
    id: '10',
    owners: ['1'],
    reports: ['1'],
    name: 'Daisy',
    breed: 'Siamese',
    age: 3,
    weight: 8,
    color: 'White and Brown',
    sex: 'female',
    description:
      'Daisy is a beautiful and loving Siamese cat. She was a great companion and loved to cuddle.',
    image: 'https://example.com/daisy.jpg',
    owner: 'Michael Johnson',
    createdAt: 1623456321,
    updatedAt: 1623456321,
    lost: false,
    lostDate: null,
    lostLocation: null,
    found: false,
    foundDate: null,
    foundLocation: null,
    availableToAdopt: false,
    adopted: false,
    adoptedDate: null,
    adoptedBy: null,
    deceased: true,
    deceasedDate: '2022-11-15',
    deceasedCause: 'Illness',
  },
]

const owners: Owner[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
    phone: '555-555-5555',
    address: '123 Main St',
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    zip: '90210',
    pets: ['7', '2', '8'],
    reports: ['2', '5'],
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'janesmith@email.com',
    phone: '555-555-5556',
    address: '456 Market St',
    city: 'San Francisco',
    state: 'California',
    country: 'USA',
    zip: '94102',
    pets: ['2'],
    reports: ['2', '5'],
  },
  {
    id: '3',
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bobjohnson@email.com',
    phone: '555-555-5557',
    address: '789 Park Ave',
    city: 'New York',
    state: 'New York',
    country: 'USA',
    zip: '10001',
    pets: ['4', '6', '1'],
    reports: ['2', '5'],
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emilydavis@email.com',
    phone: '555-555-5558',
    address: '246 Market St',
    city: 'Seattle',
    state: 'Washington',
    country: 'USA',
    zip: '98101',
    pets: ['1', '9'],
    reports: ['2', '5'],
  },
  {
    id: '5',
    firstName: 'William',
    lastName: 'Brown',
    email: 'williambrown@email.com',
    phone: '555-555-5559',
    address: '369 Main St',
    city: 'Chicago',
    state: 'Illinois',
    country: 'USA',
    zip: '60601',
    pets: ['10', '3'],
    reports: ['2', '5'],
  },
  {
    id: '6',
    firstName: 'Ashley',
    lastName: 'Johnson',
    email: 'ashleyjohnson@email.com',
    phone: '555-555-5560',
    address: '159 Market St',
    city: 'Houston',
    state: 'Texas',
    country: 'USA',
    zip: '77001',
    pets: ['5'],
    reports: ['2', '5'],
  },
  {
    id: '7',
    firstName: 'Michael',
    lastName: 'Wilson',
    email: 'michaelwilson@email.com',
    phone: '555-555-5561',
    address: '753 Main St',
    city: 'Miami',
    state: 'Florida',
    country: 'USA',
    zip: '33101',
    pets: ['1', '5'],
    reports: ['2', '5'],
  },
  {
    id: '8',
    firstName: 'Sarah',
    lastName: 'Smith',
    email: 'sarahsmith@email.com',
    phone: '555-555-5562',
    address: '964 Park Ave',
    city: 'New Orleans',
    state: 'Louisiana',
    country: 'USA',
    zip: '70112',
    pets: ['4', '7', '9'],
    reports: ['2', '5'],
  },
  {
    id: '9',
    firstName: 'David',
    lastName: 'Lee',
    email: 'davidlee@email.com',
    phone: '555-555-5563',
    address: '147 Market St',
    city: 'Denver',
    state: 'Colorado',
    country: 'USA',
    zip: '80201',
    pets: ['8'],
    reports: ['2', '5'],
  },
  {
    id: '10',
    firstName: 'Jessica',
    lastName: 'Brown',
    email: 'jessicabrown@email.com',
    phone: '555-555-5564',
    address: '753 Park Ave',
    city: 'Phoenix',
    state: 'Arizona',
    country: 'USA',
    zip: '85001',
    pets: ['2', '7', '3', '6', '10'],
    reports: ['2', '5'],
  },
]

const reports: Report[] = [
  {
    id: '1',
    petId: '4',
    createdAt: 1616593052000,
    updatedAt: 1616593052000,
    type: 'lost',
    description: 'Lost black and white spotted dog with collar',
    location: '123 Main St, San Francisco, California 94102',
    resolved: false,
    resolvedAt: null,
    resolvedBy: null,
  },
  {
    id: '2',
    petId: '1',
    createdAt: 1616593052000,
    updatedAt: 1616593052000,
    type: 'found',
    description: 'Found small brown and white rabbit in park',
    location: '456 Park Ave, San Francisco, California 94102',
    resolved: false,
    resolvedAt: null,
    resolvedBy: null,
  },
  {
    id: '3',
    petId: '10',
    createdAt: 1616593052000,
    updatedAt: 1616593052000,
    type: 'injured',
    description: 'Injured grey and white cat with collar',
    location: '789 Market St, San Francisco, California 94102',
    resolved: false,
    resolvedAt: null,
    resolvedBy: null,
  },
  {
    id: '4',
    petId: '2',
    createdAt: 1616593052000,
    updatedAt: 1616593052000,
    type: 'deceased',
    description: 'Deceased black and white dog with collar',
    location: '246 Market St, Seattle, Washington 98101',
    resolved: true,
    resolvedAt: 1616593052000,
    resolvedBy: '5',
  },
  {
    id: '5',
    petId: '9',
    createdAt: 1616593052000,
    updatedAt: 1616593052000,
    type: 'adopted',
    description: 'Adopted brown and white hamster with cage',
    location: '369 Main St, Chicago, Illinois 60601',
    resolved: true,
    resolvedAt: 1616593052000,
    resolvedBy: '6',
  },
]

export type { Pet, Owner, Report }
export { pets, owners, reports }
