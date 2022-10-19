import axios from 'axios'

const baseUrl = `https://backend-news-example.herokuapp.com/api`

export const fetchArticles = async () => {
  const { data } = await axios.get(`${baseUrl}/articles`)
  return data.articles
}

export const fetchTopics = async () => {
  const { data } = await axios.get(`${baseUrl}/topics`)
  return data.topics
}

export const fetchArticlesByTopic = async topic => {
  const { data } = await axios.get(`${baseUrl}/articles?topic=${topic}`)
  return data.articles
}

export const fetchArticleById = async article_id => {
  const { data } = await axios.get(`${baseUrl}/articles/${article_id}`)
  return data
}

export const fetchUsers = async () => {
  const { data } = await axios.get(`${baseUrl}/users`)
  return data.users
}

export const patchArticleById = async (id, value) => {
  const { data } = await axios.patch(`${baseUrl}/articles/${id}`, {
    inc_votes: value,
  })
  return data
}
