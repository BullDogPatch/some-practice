import { useNavigate, useParams } from 'react-router-dom'
import { useArticlesByTopic } from '../hooks/useArticlesByTopic'
import Article from './Article'
import Loading from './Loading'

const ArticlesByTopic = () => {
  const navigate = useNavigate()
  const { topic } = useParams()
  const { data, isLoading } = useArticlesByTopic(topic)

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
