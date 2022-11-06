interface SearchResultProps {
  cats: Cat[],
  query: string
}

interface LoadingProps {
  message?: string
  timer?: number
  timerOutMessage?: string
}
