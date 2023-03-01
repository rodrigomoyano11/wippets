import { NextRequest, NextResponse } from 'next/server'

import source from '../source'
import { Pet } from '~/utils/mocks'

const { pets } = source

const GET = () => {
  const allPets = Array.from(pets.values())

  return NextResponse.json(allPets)
}

const POST = async (request: NextRequest) => {
  const body = (await request.json()) as Pet

  if (pets.has(body.id)) return new NextResponse('Pet already exists', { status: 409 })

  pets.set(body.id, body)

  return NextResponse.json(body)
}

const PUT = () => new NextResponse('Not acceptable', { status: 406 })

const DELETE = () => new NextResponse('Not acceptable', { status: 406 })

export { GET, POST, PUT, DELETE }
