import { useRef } from "react";
import "./SearchBox.css"

const SearchBox = (props) => {
  const searchField = useRef(null);

  const handleSearchClick = () => {
    props.setQuery(searchField.current.value); 
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter"){
      handleSearchClick();
    }
  }

  return (
    <div className="search-box">
      <input ref={searchField} type="text" placeholder="Search" onKeyDown={handleKeyDown} />
      <button className="bx bx-search" onClick={handleSearchClick}></button>
    </div>
  )
}

export default SearchBox;
