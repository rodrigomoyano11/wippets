const formatFirstLetter = (sentence: string, variant: 'upper' | 'lower' = 'upper') => {
  const firtLetter = sentence.charAt(0)
  const restOfSentence = sentence.slice(1)

  if (variant === 'lower') return firtLetter.toLowerCase() + restOfSentence
  return firtLetter.toUpperCase() + restOfSentence
}

export { formatFirstLetter }
