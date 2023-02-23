import React from 'react';

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-3'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full b-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO'S Out</p>
                    <p className='text-m px-2 pt-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded p-1'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[180px] w-full object-cover rounded-xl' src={require('../images/burger.jpg')} alt="" />
            </div>

            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full b-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Coupons</p>
                    <p className='text-m px-2 pt-2'>Grab them</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded p-1'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[180px] w-full object-cover rounded-xl' src={require('../images/Dish.jpg')} alt="" />
            </div>

            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full b-black/40 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                    <p className='text-m px-2 pt-2'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded p-1'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[180px] w-full object-cover rounded-xl' src={require('../images/Plates.jpg')} alt="" />
            </div>
        </div>
    )
}

export default HeadlineCards;