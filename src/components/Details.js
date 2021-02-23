import React, { useState, useEffect }  from 'react';
import D_API from '../App';

export const Details= ({ title,runtime, 
    popularity,id,overview}) => <div
    className="detail"> This is movie details

        <div className="movie-info">
            <h2>{title}</h2>
           
     </div>
     </div>


export default Details;
