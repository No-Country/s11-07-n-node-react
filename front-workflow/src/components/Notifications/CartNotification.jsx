import React from 'react';

const CartNotification = ({title,image,description}) => {
    return (
        <div className='text-black flex items-center gap-3 bg-white p-2 w-[98%] my-1 shadow-lg object-cover'>
            <img className='w-[50px] h-[50px] rounded-full  ' src={image} alt="" />
            <div>
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default CartNotification;