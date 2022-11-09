interface SearchResultProps {
  query: string
  result: Cat | null
}

interface LoadingProps {
  message?: string
  timer?: number
  timerOutMessage?: string
}
