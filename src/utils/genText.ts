const genText = (
  chars: string[],
  textLen: number,
  minWordLen: number,
  maxWordLen: number
): string => {
  //FIXME: just for fun
  return [...Array(textLen)]
    .map(word =>
      [...Array(minWordLen + Math.floor(Math.random() * maxWordLen))]
        .map(char => chars[Math.floor(Math.random() * chars.length)])
        .join('')
    )
    .join(' ')
}

export default genText
