import React from 'react';

const BestCard = (props) => {
    const style = {
        width: "10rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)" // Shadow style
    };

    const stylebtn = {
        width: '7rem',
    };

    return (
        <div>
            <div class="card rounded" style={style}>
                <img src={props.pics} class="card-img-top rounded-full" alt="..." />
                <div class="card-body">
                    <h3>{props.name}</h3>
                    <h4 class="card-text text-danger d-flex">{props.price}<span><h6 className='text-dark'><strike>{props.oldprice}</strike></h6></span></h4>
                    <p class="card-text">{props.rating} <span>{props.num}</span></p>
                    <button className="btn btn-primary btn-add-to-cart" style={stylebtn}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default BestCard;
