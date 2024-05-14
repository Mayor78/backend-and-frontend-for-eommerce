import React from 'react'
import "../style/sidebar.css";

const Cards = (props) => {
    const width = {
        width: '15rem',
        height: "auto",
        border: "border-radius"
    }
    const styleimage ={
        width: '15rem',
        height: "13rem",
        border: "border-radius",
        bg: "dark"
    }
    const stylebtn ={
       width: '13rem',
      
    }
  

  return (
    <div>
        <div class="card border border-light-subtle" style={width } >
  <img src={props.picture} class="card-img-top" alt="" style={styleimage} />
  <div class="card-body ">
    <h3 class="card-title">{props.name}</h3>
    <h4 class="card-text text-danger d-flex">{props.price}<span><h6 className='text-dark'><strike>{props.oldprice}</strike></h6></span></h4>
    <p class="card-text text-warning">{props.rating}  <span>{props.num}</span></p>
    <button className="btn btn-primary btn-add-to-cart  " style={stylebtn}>Add To Cart</button>
  </div>
</div>


    </div>
  )
}

export default Cards
