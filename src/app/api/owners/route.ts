import { NextRequest, NextResponse } from 'next/server'

import source from '../source'
import { Owner } from '~/utils/mocks'

const { owners } = source

const GET = () => {
  const allOwners = Array.from(owners.values())

  return NextResponse.json(allOwners)
}

const POST = async (request: NextRequest) => {
  const body = (await request.json()) as Owner

  if (owners.has(body.id)) return new NextResponse('Owner already exists', { status: 409 })

  owners.set(body.id, body)

  return NextResponse.json(body)
}

const PUT = () => new NextResponse('Not acceptable', { status: 406 })

const DELETE = () => new NextResponse('Not acceptable', { status: 406 })

export { GET, POST, PUT, DELETE }
