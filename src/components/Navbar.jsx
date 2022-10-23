import { NavLink } from 'react-router-dom'
import { useFetchTopics } from '../hooks/useFetchTopics'

const Navbar = () => {
  const { data } = useFetchTopics()

  return (
    <nav>
      <div>
        {data?.map(topic => (
          <NavLink
            to={`/${topic.slug}`}
            key={topic.slug}
            className="topic-link"
          >
            {topic.slug}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
