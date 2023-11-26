import React from 'react';

const AddCard = ({pass}) => {
    const {title,price,images,category,description}=pass 
    return (
        <div className=' border rounded p-2 mb-3'>
                <img style={{height:'150px'}} src={images[0]} alt="" />
                    <h6>Category:{category}</h6>
                    <h6>Title:{title}</h6>
                    <h6>Description:{description}</h6>
                    <h3 className=' text-danger' >Price:{price}</h3>
        </div>
    );
};

export default AddCard;