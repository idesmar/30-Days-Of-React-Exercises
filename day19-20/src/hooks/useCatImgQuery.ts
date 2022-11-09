import { useQuery } from '@tanstack/react-query'
import { fetchCatImage } from '../services/services'

const useCatImgQuery = (id: string) => {
  return useQuery(
    ['cat img', id],
    () => fetchCatImage(id),
    { staleTime: Infinity }
  )
}


export { useCatImgQuery }
