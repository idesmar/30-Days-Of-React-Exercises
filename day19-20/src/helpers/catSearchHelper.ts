function getCatSearchResult(data: Cat[], query: string) {

  const [filterResult]: Cat[] | undefined[] = data.filter(el =>
    el.name.toLowerCase() === query.toLowerCase().trim())

  return filterResult
}


export { getCatSearchResult }
