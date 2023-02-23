import React from 'react';
import {data} from '../data/data.js';

const Food = () => {
    console.log(data);
    return(
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu</h1>
            {/* Filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter type */}
                <div>
                    <p className='font-bold'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                         <button className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>All</button>
                         <button className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>Burgers</button>
                         <button className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>Pizzas</button>
                         <button className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>Salads</button>
                         <button className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                <p className='font-bold'>Filter Price</p>
                   <div className='flex justify-between flex-wrap max-w-[300px]'>
                       <button className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>$</button>
                       <button className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>$$</button>
                       <button className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>$$$</button>
                       <button className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>$$$$</button>
                   </div>
                </div>
            </div>
        </div>
    )
}


export default Food;