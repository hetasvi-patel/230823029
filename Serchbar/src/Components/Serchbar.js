import React from 'react'

const searchbar = () => 
{
    return (
         <div>
           <input type="text" placeholder="Search..." name="search" style={{padding: "10px 53px",marginLeft: "400px",marginTop: "10px",fontsize: "18px",borderRadius: " 100px",border:"solid 1px "}} />
           <img src="icon.png" alt=""  style={{height:"22px", margin:" -10px 0px -8px -260px"}}/>
       </div>
    )
}

export default searchbar
