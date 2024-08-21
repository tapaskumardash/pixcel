import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="/banner.jpeg" alt="banner" />
      <div className="banner-content">
        <h1>The best free stock image platform</h1>
        <p>Discover a vast collection of free, high-quality stock images for personal and commercial use on Pixcel.</p>
        <div className="banner-content-btn-container">
          <a href="#search-container"><i className='bx bx-image'></i>Discover</a>
        </div>
        <i className='bx bx-chevron-down'></i>
      </div>
    </div>
  )
}

export default Banner;
