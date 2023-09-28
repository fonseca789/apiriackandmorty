import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          // console.log(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({}); //<-- si se cierra se limpia los datos del estado
  }, [id]);
  const { name, status, species,  image } = character;
  
  return (
    <div key={character.id} className="detail">
      <div className="info-detail">
        <h1>Información Detallada del Personaje</h1>
        <h3>Nombre: {name} ||</h3>
        <hr />
        <h3>STATUS || {status} </h3>
        <h3>SPECIE || {species}</h3>
        
        {/* <h3>Origen ||{origenPlanet} </h3> */}
      </div>
      <div className="img-deail">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
