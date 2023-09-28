import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../Card/Card.func.jsx";
// import style from "../Cards/cards.module.css";
const Favorites = ({ onClose }) => {
  const myFavorites = useSelector((state) => state.myFavorites);
  return (
    <div className="cards">
      {myFavorites.length === 0 || <h2>Personajes Favorite 😍</h2>}
      <div className="interface">
        {myFavorites.length > 0 ? (
          myFavorites.map((character) => {
            return (
              <Card
                isFav={character.isFav}
                id={character.id}
                key={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin}
                image={character.image}
                onClose={onClose}
              />
            );
          })
        ) : (
          <h1>No Hay Personajes Favorito, Debes llenarlo 😉</h1>
        )}
        ;
      </div>
    </div>
  );
};
export default Favorites;
