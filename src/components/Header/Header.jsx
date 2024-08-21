import { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened);
  }

  const handleLoginClick = () => {
    navigate("/login");
  }

  return (
    <header className="scrolled">
      <nav>
        <div className="nav-left">
          <img src="logo.png" alt="logo" />
          <span>{props.company}</span>
        </div>

        <div className="nav-right">
          <ul className={isSidebarOpened ? 'active-sidebar' : ''}>
            <li><Link to="/">Home</Link></li>
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

export default Header;
