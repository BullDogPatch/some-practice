import { useQuery } from '@tanstack/react-query'
import { fetchArticlesByTopic } from '../utils/api'

// the topic variable in the useQuery function should use the topic from params return from react-router
export const useArticlesByTopic = topic =>
  useQuery(['articlesByTopic', topic], () => fetchArticlesByTopic(topic))
