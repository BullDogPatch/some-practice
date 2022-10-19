import { useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../utils/api'
import Article from './Article'
import Loading from './Loading'

const Articles = () => {
  const { data, isLoading, isError } = useQuery(['articles'], fetchArticles)

  if (isLoading) return <Loading />

  return (
    <ul>
      {data?.map(article => (
        <Article key={article.article_id} article={article} />
      ))}
    </ul>
  )
}

export default Articles
