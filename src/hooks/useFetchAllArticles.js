import { useQuery } from '@tanstack/react-query'
import { fetchAllArticles } from '../utils/api'

export const useFetchAllArticles = (sortBy, orderBy) =>
  useQuery(['articles', { sortBy, orderBy }], () =>
    fetchAllArticles(sortBy, orderBy)
  )
