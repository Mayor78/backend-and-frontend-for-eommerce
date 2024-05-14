import React from 'react'
import "../style/icon.css"
import { MdDeliveryDining } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const IconsTwo = () => {
  return (
    <div>
                    <button class="btn-39 rounded-pill">
  <span class="new"><TbTruckDelivery /></span>
  <span class="old"><MdDeliveryDining/></span>
</button>
    </div>
  )
}

export default IconsTwo
