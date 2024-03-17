import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <nav className='navbar'>
      <Link to='/'> 🏠 Inicio  </Link> 
      <Link to='/favoritos'> ❤️ Favoritas</Link>
    </nav>
  )
};
export default Navbar;
