import { useQuery } from '@tanstack/react-query'
import { fetchTopics } from '../utils/api'

// playing around making a custom reusable hook, not the best example but it should work

export const useTopics = () => useQuery(['topicLink'], fetchTopics)
