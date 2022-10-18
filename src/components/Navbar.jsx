import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/cooking">Cooing</NavLink>
      <NavLink to="/football">Football</NavLink>
      <NavLink to="/household">Household</NavLink>
    </nav>
  )
}

export default Navbar
