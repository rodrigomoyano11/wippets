import { NextRequest, NextResponse } from 'next/server'

import source from '../source'
import { Report } from '~/utils/mocks'

const { reports } = source

const GET = () => {
  const allReports = Array.from(reports.values())

  return NextResponse.json(allReports)
}

const POST = async (request: NextRequest) => {
  const body = (await request.json()) as Report

  if (reports.has(body.id)) return new NextResponse('Report already exists', { status: 409 })

  reports.set(body.id, body)

  return NextResponse.json(body)
}

const PUT = () => new NextResponse('Not acceptable', { status: 406 })

const DELETE = () => new NextResponse('Not acceptable', { status: 406 })

export { GET, POST, PUT, DELETE }
