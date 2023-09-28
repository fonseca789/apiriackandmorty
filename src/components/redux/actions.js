import axios from "axios";
export const ADD_FAV ='ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV'


// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      });
   };
};

// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };

 // ACTION | getFav

 export const getFav = () => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/';
   return (dispatch) => {
      axios.get(endpoint).then(({ data }) => {
         return dispatch({
            type: 'GET_FAV',
            payload: data,
      });
      }).catch((error) => alert(error.message))
   };
};