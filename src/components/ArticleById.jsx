import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchArticleById } from '../utils/api'
import codingImage from '../images/coding.png'
import cookingImage from '../images/cooking.png'
import footballImage from '../images/football.png'
import Comments from './Comments'
import Votes from './Votes'
// import Vote from './Vote'
import Loading from './Loading'

const ArticleById = () => {
  const { article_id } = useParams()
  const { data, isLoading } = useQuery(['articleById', article_id], () =>
    fetchArticleById(article_id)
  )

  if (isLoading) return <Loading />

  return (
    <div className="article-by-id">
      <h3>{data.article.title}</h3>

      <p>{data.article.topic}</p>
      {data.article.topic === 'coding' ? (
        <img className="topic-image" src={codingImage} alt="coding" />
      ) : data.article.topic === 'cooking' ? (
        <img className="topic-image" src={cookingImage} alt="cooking" />
      ) : (
        <img className="topic-image" src={footballImage} alt="football" />
      )}
      <div className="article-body">
        <p>{data.article.body}</p>
      </div>
      <Votes votes={data.article.votes} article_id={data.article.article_id} />
      {/* <Vote article={data.article} /> */}
      <Comments
        article_id={data.article.article_id}
        commentCount={data.article.comment_count}
      />
    </div>
  )
}

export default ArticleById
