import { useEffect, useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const HomeHeader = (props) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleExploreClick = (query) => {
    props.setQuery(query);
  }

  const toggleSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened);
  }

  const handleLoginClick = () => {
    navigate("/login");
  }

  return (
    <header>
      <nav>
        <div className="nav-left">
          <img src="logo.png" alt="logo" />
          <span>{props.company}</span>
        </div>

        <div className="nav-right">
          <ul className={isSidebarOpened ? 'active-sidebar' : ''}>
            <li>
              <a>Explore<i className='bx bx-chevron-down'></i></a>
              <ul>
                <li onClick={() => handleExploreClick("nature")}>Nature Photos</li>
                <li onClick={() => handleExploreClick("rain")}>Rain Photos</li>
                <li onClick={() => handleExploreClick("cat")}>Cat Photos</li>
                <li onClick={() => handleExploreClick("night")}>Night Photos</li>
                <li onClick={() => handleExploreClick("universe")}>Universe Photos</li>
                <li onClick={() => handleExploreClick("technology")}>Technology Photos</li>
              </ul>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <i className='bx bx-x' onClick={toggleSidebar}></i>
          </ul>

          <button onClick={handleLoginClick} id="nav-login-btn">Login</button>
          <i className='bx bx-menu' onClick={toggleSidebar}></i>
        </div>
      </nav>
    </header>
  );
}

export default HomeHeader;
