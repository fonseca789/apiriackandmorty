import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
// import style from "./nav.module.css";
export default function Nav ({onSearch}) {
    
    
    return (
      <div className="nav">
        <div className="nav-items">
          
        <Link to={'/about'} >
          <button>About</button>
        </Link>
        <Link to={'/home'}>
          <button>Home</button>
        </Link>
        <Link to={'/favorites'}>
          <button>Favorites</button>
        </Link>
        <div className="nav-search">
        <SearchBar onSearch={onSearch} />
        </div>
        </div>
      </div>
    );
}