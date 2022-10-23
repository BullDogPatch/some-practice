import { useState } from 'react'
import { useFetchAllArticles } from '../hooks/useFetchAllArticles'
import Article from './Article'
import Loading from './Loading'

const Articles = () => {
  const [sortBy, setSortBy] = useState('created_at')
  const [orderBy, setOrderBy] = useState('desc')
  const { data, isLoading } = useFetchAllArticles(sortBy, orderBy)

  if (isLoading) return <Loading />

  return (
    <>
      <div className="sort-container">
        <label htmlFor="sort_by">Sort: </label>
        <select
          id="sort_by"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <label htmlFor="order">By: </label>
        <select
          id="order"
          value={orderBy}
          onChange={e => setOrderBy(e.target.value)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <ul>
        {data.map(article => (
          <Article key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  )
}

export default Articles
