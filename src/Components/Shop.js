import React, { useEffect, useState } from 'react';
import Product from './Product';
import AddCard from './AddCard';

const Shop = () => {
    const [Products, setproduct] = useState([])

    const [addCard, setAddCard]= useState([])

    useEffect(()=>{
        fetch('Products.json')
        .then(res=>res.json())
        .then(data=>setproduct(data))

    })
    const click = (data) =>{
        const add =[...addCard,data] 
        setAddCard(add)
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-8">
                    <h1>All product:{Products.length}</h1>
                   <div className="row">
                    {
                      Products.map(product=> <Product click={click} key={product.id} product={product} ></Product>)
                    }
                   </div>
                </div>
                <div className="col-lg-4">
                   <h1>Add Card</h1>
                   {
                     addCard.map(pass=> <AddCard pass={pass}></AddCard>)  
                   }
                </div>
            </div>
        </div>
    );
};

export default Shop;