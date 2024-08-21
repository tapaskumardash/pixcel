import "./Footer.css"

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-body">
        <div className="footer-logo">
          <img src="logo.png" alt="logo" />
          <span>{props.company}</span>
        </div>
        <p>Discover a vast collection of free, high-quality stock images for personal and commercial use on Pixcel.</p>
        <a href="https://github.com/tapaskumardash/pixcel"><i className='bx bxl-github'></i></a>
      </div>
      <div className="copyright-container">
        <span>Copyright © Pixcel {new Date().getFullYear()} • Developed by <a href="/">Tapas</a></span>
      </div>
    </footer>
  )
}

export default Footer;
