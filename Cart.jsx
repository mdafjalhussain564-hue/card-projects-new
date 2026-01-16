import React from 'react'
import seriesData from "../api/seriesData.json"

const Cart = () => {
  return (
    <ul>
    {seriesData.map((curElm) => {
    return (
    <li key={curElm.id}>  
    <div>
      <img
        src={curElm.imgUrl}
        alt={seriesData[0].name}
        width="10%"
        height="10%"
      />
    </div>

      <h2>Name: {curElm.name}</h2>
      <h3>Rating: {curElm.rating}</h3>
      <p>Summary: {seriesData[0].description}</p>

      <p>Genre: {curElm.genre.join(", ")}</p>
      <p>Cast: {curElm.cast.join(", ")}</p>

      <a
        href={curElm.watchUrl}
        target="_blank"
        rel="noreferrer"
      >
        <button>Watch Now</button>
      </a>
    </li>
    ); 
    })}
    </ul>
  )
}

export default Cart


