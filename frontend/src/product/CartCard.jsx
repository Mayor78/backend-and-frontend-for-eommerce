import React from 'react'

const CartCard = (props) => {
    const catstyle = {
        // height: '200px',
        width: '7rem'
    }
  return (
    <div>
            <div class="card" style={catstyle}>
  <img src={props.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{props.title}</p>
  </div>
</div>
    </div>
  )
}

export default CartCard
