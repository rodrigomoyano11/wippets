const getNearestFromValuesUtil = (values: number[] | ReadonlyArray<number>, value: number) => {
  if (!values.length) throw new Error('getNearestFromValues: values is empty')

  return values.reduce((previous, current) => {
    const previousDistance = Math.abs(previous - value)
    const currentDistance = Math.abs(current - value)

    return currentDistance < previousDistance ? current : previous
  })
}

export { getNearestFromValuesUtil }
