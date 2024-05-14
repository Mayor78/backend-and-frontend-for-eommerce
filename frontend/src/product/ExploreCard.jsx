import React from 'react'

const ExploreCard = (props) => {
 



    const style ={
        width: '10rem',
      
    }

    
    const stylebtn = {
        width: '7rem',
    };


  return (
    <div>
            <div class="card" style={style}>
  <img src={props.picture} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-text">{props.price} </h4>
    <h5><span>{props.rating}</span> <p>{props.num}</p></h5>
    <button className="btn btn-primary btn-add-to-cart" style={stylebtn}>Add To Cart</button>
  </div>
</div>
    </div>
  )
}

export default ExploreCard
