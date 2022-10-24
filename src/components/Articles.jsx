import { useState } from 'react'
import { useFetchAllArticles } from '../hooks/useFetchAllArticles'
import Article from './Article'
import QueryForm from './QueryForm'
import Loading from './Loading'

const Articles = () => {
  const [sortBy, setSortBy] = useState('created_at')
  const [orderBy, setOrderBy] = useState('desc')
  const { data, isLoading } = useFetchAllArticles(sortBy, orderBy)

  if (isLoading) return <Loading />

  return (
    <>
      <QueryForm
        sortBy={sortBy}
        setSortBy={setSortBy}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
      <ul>
        {data.map(article => (
          <Article key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  )
}

export default Articles
