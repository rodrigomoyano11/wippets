import { NextRequest, NextResponse } from 'next/server'

import source from '../../source'
import { WithParams } from '~/types/general'
import { Report } from '~/utils/mocks'

const { reports } = source

type Params = WithParams<{ id: string }>

const GET = (_request: NextRequest, { params }: Params) => {
  const { id } = params

  if (!id) return new NextResponse('"id" is required', { status: 400 })

  const report = reports.get(id)

  if (!report) return new NextResponse('Report not found', { status: 404 })

  return NextResponse.json(report)
}

const POST = () => new NextResponse('Not acceptable', { status: 406 })

const PUT = async (request: NextRequest) => {
  const body = (await request.json()) as Report

  if (!reports.has(body.id)) return new NextResponse('Report not found', { status: 404 })

  reports.set(body.id, body)

  return NextResponse.json(body)
}

const DELETE = (_request: NextResponse, { params }: Params) => {
  const { id } = params

  if (!id) return new NextResponse('"id" is required', { status: 400 })

  if (!reports.has(id)) return new NextResponse('Report not found', { status: 404 })

  reports.delete(id)

  return new NextResponse(undefined, { status: 204 })
}

export { GET, POST, PUT, DELETE }
