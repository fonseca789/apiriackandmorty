import {useState} from 'react';


//crear una funcion que guarda el value del input

export default function SearchBar({onSearch}) {
   //creaamos un estado con el nombre id
   let [id,setId] =useState('');
   const handleChange = (event) => {
   
      setId(event.target.value)
   }
   return (
      <div className='searchBar'>
         <input type='search' onChange={handleChange} value={id} placeholder='Agregar por ID'/>
         <button onClick={() => {onSearch(id); setId('')}} >Agregar/ramdon</button>
      
      </div>
      
   );
}
