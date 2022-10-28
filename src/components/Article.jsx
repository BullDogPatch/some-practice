import { Link } from 'react-router-dom'
import codingImage from '../images/coding.png'
import cookingImage from '../images/cooking.png'
import footballImage from '../images/football.png'
import Moment from 'moment'

const Article = ({ article }) => {
  return (
    <div className="article">
      <h3 style={{ textTransform: 'capitalize' }}>{article.topic}</h3>
      <h2>{article.title}</h2>
      {article.topic === 'coding' ? (
        <img className="topic-image" src={codingImage} alt="coding" />
      ) : article.topic === 'cooking' ? (
        <img className="topic-image" src={cookingImage} alt="cooking" />
      ) : (
        <img className="topic-image" src={footballImage} alt="football" />
      )}
      <p className="body">{article.body}</p>
      <div className="stats">
        {/* <p>
          <span>Author</span>: {article.author}
        </p> */}
        <p>
          <span>Comments</span>: {article.comment_count}
        </p>
        <p>
          <span>Created at</span>:{' '}
          {Moment(article.created_at).format('MMMM Do YYYY')}
        </p>
      </div>
      <Link to={`/articles/${article.article_id}`}>See More</Link>
    </div>
  )
}

export default Article
