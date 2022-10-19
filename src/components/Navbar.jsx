import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchTopics } from '../utils/api'

const Navbar = () => {
  const { data, isLoading } = useQuery(['topicLink'], fetchTopics)

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
