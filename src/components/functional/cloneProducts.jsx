import { Component } from "react";
import Product from "./products";
import { useState } from "react";

const Clone = () => {
    const {devices , setDevices} = useState([
        {productName : "laptop" , id : 1 , price : 2000},
        {productName : "PC" , id : 2 , price : 4000},
        {productName : "Phone" , id : 3 , price : 3000}
    ])
    return (
     <div>
        {devices.map((p, index) =>(
            <Product key = {index} productName = {p.productName} Price = {p.price}></Product>
        ))}
     </div>
    );
}
 
export default Clone;