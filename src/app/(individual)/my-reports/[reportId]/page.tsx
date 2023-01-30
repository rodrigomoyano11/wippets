import { reports } from '~/utils/mocks'

type Props = {
  params: {
    reportId: string
  }
}

const ReportPage = ({ params: { reportId } }: Props) => {
  const foundReport = reports.find((report) => report.id === reportId)

  return (
    <div>
      <h1>{foundReport?.type}</h1>

      <p>
        <strong>Location:</strong> {foundReport?.location}
      </p>
      <p>
        <strong>Description:</strong> {foundReport?.description}
      </p>
      <p>
        <strong>Created At:</strong> {foundReport?.createdAt}
      </p>
      <p>
        <strong>Pet:</strong> {foundReport?.petId}
      </p>
    </div>
  )
}

export default ReportPage
