const genText = (
  chars: string[],
  textLen: number,
  minWordLen: number,
  maxWordLen: number
): string => {
  return [...Array(textLen)]
    .map(word =>
      [...Array(minWordLen + Math.floor(Math.random() * maxWordLen))]
        .map(char => chars[Math.floor(Math.random() * chars.length)])
        .join('')
    )
    .join(' ')
}

export default genText
