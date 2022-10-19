import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchArticlesByTopic } from '../utils/api'
import Article from './Article'
import Loading from './Loading'

const ArticlesByTopic = () => {
  const navigate = useNavigate()
  const { topic } = useParams()
  const { data, isLoading } = useQuery(['articlesByTopic', topic], () =>
    fetchArticlesByTopic(topic)
  )

  if (isLoading) return <Loading />

  return (
    <div>
      <button onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        All Articles
      </button>
      {data.map(article => (
        <Article article={article} key={article.article_id} />
      ))}
    </div>
  )
}

export default ArticlesByTopic
