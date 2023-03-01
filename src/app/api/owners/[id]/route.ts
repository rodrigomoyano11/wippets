import { NextRequest, NextResponse } from 'next/server'

import source from '../../source'
import { WithParams } from '~/types/general'
import { Owner } from '~/utils/mocks'

const { owners } = source

type Params = WithParams<{ id: string }>

const GET = (_request: NextRequest, { params }: Params) => {
  const { id } = params

  if (!id) return new NextResponse('"id" is required', { status: 400 })

  const owner = owners.get(id)

  if (!owner) return new NextResponse('Owner not found', { status: 404 })

  return NextResponse.json(owner)
}

const POST = () => new NextResponse('Not acceptable', { status: 406 })

const PUT = async (request: NextRequest) => {
  const body = (await request.json()) as Owner

  if (!owners.has(body.id)) return new NextResponse('Owner not found', { status: 404 })

  owners.set(body.id, body)

  return NextResponse.json(body)
}

const DELETE = (_request: NextResponse, { params }: Params) => {
  const { id } = params

  if (!id) return new NextResponse('"id" is required', { status: 400 })

  if (!owners.has(id)) return new NextResponse('Owner not found', { status: 404 })

  owners.delete(id)

  return new NextResponse(undefined, { status: 204 })
}

export { GET, POST, PUT, DELETE }
