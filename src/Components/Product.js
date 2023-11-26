import { click } from '@testing-library/user-event/dist/click';
import React from 'react';

const Product = ({product,click}) => {
    const {title,price,images,category,description}=product
    return (
      
          
            <div className="col-lg-4 mb-3">
                <div className=' border rounded p-2'>
                    <img style={{height:'150px'}} src={images[0]} alt="" />
                    <h6>Category:{category}</h6>
                    <h6>Title:{title}</h6>
                    <h6>Description:{description}</h6>
                    <h3>Price:{price}</h3>
                    <button onClick={()=>click(product)} className=' bg-primary p-1 border rounded w-100 text-white'>Add Card</button>
                    
                </div>
            </div>
          
      
    );
};

export default Product;