import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

       

        <div class="ml-[800px]">
        <Link to='/' className='text-white mr-10'>Home</Link>
        <Link to='about' className='text-white mr-10'>About</Link>
        <Link to='news' className='text-white mr-10'>News</Link>
        
        </div>

        </div>
      </div>
    </header>
  )
}

export default Header