import { NavLink } from 'react-router-dom'
import { useFetchTopics } from '../hooks/useFetchTopics'

const Navbar = () => {
  const { data } = useFetchTopics()

  return (
    <nav className="navbar">
      {data?.map(topic => (
        <NavLink to={`/${topic.slug}`} key={topic.slug} className="topic-link">
          {topic.slug}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
