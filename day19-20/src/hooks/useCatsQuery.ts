import { useQuery } from '@tanstack/react-query'
import { fetchCats } from '../services/services'


function useCatsQuery() {
  return useQuery(['cats'], fetchCats, { staleTime: Infinity })
}


export { useCatsQuery }
