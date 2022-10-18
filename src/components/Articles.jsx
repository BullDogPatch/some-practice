import { useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../utils/api'
import Article from './Article'

const Articles = () => {
  const { data, isLoading, isError } = useQuery(['articles'], fetchArticles)

  if (isLoading) return <h3>Loading...</h3>

  return (
    <ul>
      {data?.map(article => (
        <Article key={article.article_id} article={article} />
      ))}
    </ul>
  )
}

export default Articles
