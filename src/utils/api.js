import axios from 'axios'

const baseUrl = `https://backend-news-example.herokuapp.com/api`

/* Fetch all articles */
export const fetchArticles = async () => {
  const { data } = await axios.get(`${baseUrl}/articles`)
  return data.articles
}

/* Fetch topics to render as Links in Navbar component */
export const fetchTopics = async () => {
  const { data } = await axios.get(`${baseUrl}/topics`)
  return data.topics
}

/* Fetch and render articles for the topic that is clicked */
export const fetchArticlesByTopic = async topic => {
  const { data } = await axios.get(`${baseUrl}/articles?topic=${topic}`)
  return data.articles
}

/* Fetch an article by its ID */
export const fetchArticleById = async article_id => {
  const { data } = await axios.get(`${baseUrl}/articles/${article_id}`)
  return data
}

/* Fetch users */
export const fetchUsers = async () => {
  const { data } = await axios.get(`${baseUrl}/users`)
  return data.users
}

/* Update an article by its ID */
export const patchArticleById = async (id, value) => {
  const { data } = await axios.patch(`${baseUrl}/articles/${id}`, {
    inc_votes: value,
  })
  return data
}

/* API calls with functionality to be able to order by comments, votes and by date and be to sort by ascending and descending order */

/* Fetch all articles */
export const fetchAllArticles = async (sortBy, orderBy) => {
  const { data } = await axios.get(
    `${baseUrl}/articles?sort_by=${sortBy}&order=${orderBy}`
  )
  return data.articles
}

/* Fetch comments for article by its ID */
export const fetchCommentsForArticle = async article_id => {
  const { data } = await axios.get(`${baseUrl}/articles/${article_id}/comments`)
  return data.comments
}
