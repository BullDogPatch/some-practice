import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchTopics } from '../utils/api'

const Navbar = () => {
  const { data, isLoading } = useQuery(['topicLink'], fetchTopics)
  console.log('Topics', data)

  return (
    <nav>
      {/* <NavLink to="/cooking">Cooing</NavLink>
      <NavLink to="/football">Football</NavLink>
      <NavLink to="/household">Household</NavLink> */}
      <div>
        {data?.map(topic => (
          <NavLink to={`/${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
