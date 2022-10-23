import { NavLink } from 'react-router-dom'
import { useTopics } from '../hooks/useTopics'

const Navbar = () => {
  const { data } = useTopics()

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
