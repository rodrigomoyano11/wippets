import { NextRequest, NextResponse } from 'next/server'

import source from '../../source'
import { WithParams } from '~/types/general'
import { Pet } from '~/utils/mocks'

const { pets } = source

type Params = WithParams<{ id: string }>

const GET = (_request: NextRequest, { params }: Params) => {
  const { id } = params

  if (!id) return new NextResponse('"id" is required', { status: 400 })

  const pet = pets.get(id)

  if (!pet) return new NextResponse('Pet not found', { status: 404 })

  return NextResponse.json(pet)
}

const POST = () => new NextResponse('Not acceptable', { status: 406 })

const PUT = async (request: NextRequest) => {
  const body = (await request.json()) as Pet

  if (!pets.has(body.id)) return new NextResponse('Pet not found', { status: 404 })

  pets.set(body.id, body)

  return NextResponse.json(body)
}

const DELETE = (_request: NextResponse, { params }: Params) => {
  const { id } = params

  if (!id) return new NextResponse('"id" is required', { status: 400 })

  if (!pets.has(id)) return new NextResponse('Pet not found', { status: 404 })

  pets.delete(id)

  return new NextResponse(undefined, { status: 204 })
}

export { GET, POST, PUT, DELETE }
