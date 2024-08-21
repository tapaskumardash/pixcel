import { useEffect, useRef, useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./Home.css"
import ImageCard from "../ImageCard/ImageCard";
import Banner from "../Banner/Banner";
import HomeHeader from "../Header/HomeHeader";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGE_PER_PAGE = 20;

const Home = (props) => {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(true);
  const [errorLog, setErrorLog] = useState("");
  const [downloadProgressMsg, setDownloadProgressMsg] = useState(false);

  const downloadProgressMsgContainer = useRef(null);

  useEffect(() => {
    setLoader(true);

    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_URL}?page=1&query=${props.searchQuery}&per_page=${IMAGE_PER_PAGE}&orientation=landscape&client_id=${import.meta.env.VITE_API_KEY}`);
        const responseInJson = await response.json();
        setLoader(false);
        setErrorLog("")
        setPhotos(responseInJson.results);
        console.log(responseInJson.results);
      } catch (error) {
        setLoader(false);
        if (error.name === "TypeError" && error.message === "Failed to fetch") {
          setErrorLog("Connection error, please check your internet connection!");
        }
      }
    }

    fetchImages();
  }, [props.searchQuery])

  useEffect(() => {
    const setDownloadProgressMsg = () => {
      if (downloadProgressMsg) {
        downloadProgressMsgContainer.current.style.left = "20px"
      }
      else {
        downloadProgressMsgContainer.current.style.left = "-100%"
      }
    }
    setDownloadProgressMsg();
  }, [downloadProgressMsg])

  useEffect(() => {
    document.title = "Pixcel - Get free stock images";
  }, [])

  return (
    <>
      <Banner />
      <HomeHeader setQuery={props.setSearchQuery} company={props.company} />

      <div className="home-container">
        <div id="search-container" className="search-container">
          <SearchBox setQuery={props.setSearchQuery} />
        </div>

        {loader && <div className="loader-container">
          <img src="/loader.gif" alt="loader" />
        </div>}

        {errorLog && <div className="error-container">
          <span><i className='bx bxs-error'></i>{errorLog}</span>
        </div>}

        <div className="image-container">
          {!loader && !errorLog && photos.length === 0 ? <h2>No result found!</h2> : <h2>Free {props.searchQuery} stock images</h2>}
          <div className="image-card-container">
            {
              photos.map((photo) => {
                return (
                  <ImageCard key={photo.id} imageUrl={photo.urls.small} slug={photo.slug} fullSizeImage={photo.urls.full} downloadProgress={setDownloadProgressMsg} />
                )
              })
            }
          </div>
          <div ref={downloadProgressMsgContainer} className="image-download-progress-container">
            <i className='bx bx-loader-alt'></i>
            <span>Downloading image....</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
