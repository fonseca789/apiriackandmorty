
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav} from "../redux/actions";

export default function Card(props) {
  ///recibo por props {name, id, species, gender, status, origin, onClose, image}
  
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  
  const handleFavorite = () => {
    if (!isFav) {
      setIsFav(!isFav);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(!isFav);
      dispatch(addFav(props));
    }
  };
  useEffect(() => {
    
    myFavorites.forEach((fav, id) => {
      if (fav.id === Number(id)) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  
  return (
    <div className="card" key={props.id}>
      {!isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className="info">
        <img src={props.image} alt={props.name} />

        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
        <h2>{props.status}</h2>
        <h2>{props.origin}</h2>
      </div>
    </div>
  );
}
