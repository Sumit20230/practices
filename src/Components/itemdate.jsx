import React from "react";
import "./itemdate.css";
function ItemDate(params)
{
    
    return(
       
    
       <div className="h"><pre>{params.date} {params.month} {params.year}</pre></div>
    );
}
 export default ItemDate;