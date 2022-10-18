import axios from 'axios'

const baseUrl = `https://backend-news-example.herokuapp.com/api`

export const fetchArticles = async () => {
  const { data } = await axios.get(`${baseUrl}/articles`)
  return data.articles
}
