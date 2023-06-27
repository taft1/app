import {Link, NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <nav className='d-flex justify-content-center'>
          <div className='nav nav-pills'>
            <Link to='/' className='text-[#4c4a61]'>Home</Link>
              <Link to='about' className='text-[#4c4a61]'>About</Link>
            <Link to='news' className='text-[#4c4a61]'>News</Link>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer