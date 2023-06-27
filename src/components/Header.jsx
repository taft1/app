import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

        <div className='logo'>
          <Link to='/' className='brand'>WSP</Link>
        </div>

        <div className='nav nav-pills'>
        <Link to='/' className='text-white'>Home</Link>
        <Link to='about' className='text-white'>About</Link>
        <Link to='news' className='text-white'>News</Link>
        
        </div>

        </div>
      </div>
    </header>
  )
}

export default Header