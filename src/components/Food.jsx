import React,{useState} from 'react';
import {data} from '../data/data.js';

const Food = () => {
    console.log(data);

    const [foods, setfoods] = useState(data);

    // Filter between food category
    const filterType = (category) => {
        setfoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    // Filter by price
    const filterPrice = (price) => {
        setfoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    return(
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu</h1>
            {/* Filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter type */}
                <div>
                    <p className='font-bold'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                         <button onClick={() => setfoods(data)} className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>All</button>
                         <button onClick={() => filterType('burger')} className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>Burgers</button>
                         <button onClick={() => filterType('pizza')} className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>Pizzas</button>
                         <button onClick={() => filterType('salad')} className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>Salads</button>
                         <button onClick={() => filterType('chicken')} className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                <p className='font-bold'>Filter Price</p>
                   <div className='flex justify-between flex-wrap max-w-[300px]'>
                       <button onClick={()=> filterPrice('$')} className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>$</button>
                       <button onClick={()=> filterPrice('$$')} className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>$$</button>
                       <button onClick={()=> filterPrice('$$$')} className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>$$$</button>
                       <button onClick={()=> filterPrice('$$$$')} className='border border-orange-600 text-orange-600 m-1 rounded-md px-2 hover:bg-orange-600 hover:text-white'>$$$$</button>
                   </div>
                </div>
            </div>

 {/* Foods Display */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                {foods.map((item, index)=>(
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='text-white rounded-full bg-orange-600 p-1'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Food;