import React from 'react';

const MenuCard = ({ menuData }) => {
    console.log(menuData);
  return (
   <>
<section className="main-card--cointainer">
   {menuData.map((curELem) => {
    const {id,name,cateogory,description,image}=curELem;
      return(
        <>
        <div className="card-container" key={id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">
              {id}
            </span>
            <span className="card-author subtle">{curELem.name}</span>
            <h2 className="card-title">{curELem.name}</h2>
            <span className="card-description subtle">
            {curELem.description}
            </span>
            <div className="caard-read">Read</div>
          </div>
          <img src={curELem.image} alt="images" className="card-media"/>
          <span className="card-tag subtle">Order Now</span>
        </div>
       </div>
      </>
      )
    })}
    </section>
     </>
  )
}

export default MenuCard;