import { Link } from 'react-router-dom'
import Moment from 'moment'

const Article = ({ article }) => {
  return (
    <div className="article">
      <h3 style={{ textTransform: 'capitalize' }}>{article.topic}</h3>
      <h2>{article.title}</h2>
      <p className="body">{article.body}</p>
      <div className="stats">
        <p>
          <span>Author</span>: {article.author}
        </p>
        <p>
          <span>Votes</span>: {article.votes}
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
