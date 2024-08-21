import { useEffect } from "react";
import "./NotFound.css"

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found"
  }, [])

  return (
    <div className="container">
      <div className="not-found-container">
        <img src="/logo.png" alt="logo" />
        <span>404 - Page Not Found!</span>
        <p>The page you are looking for is does not exist!</p>
      </div>
    </div>
  )
}

export default NotFound;
