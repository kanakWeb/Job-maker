import React, { useEffect, useState } from 'react';
import Category from './Category';

const CategoryList = () => {

    const[categories,SetCategories]=useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>SetCategories(data))
    },[])
    return (
        <div className=' bg-orange-50 py-24'>
            <div className='pb-10  text-center'>
            <h2 className='text-4xl font-bold pb-3'>Job Category List</h2>
            <p className='text-center'>Explore Thousand of job opportunity with all information we need.Its Your Future</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5 mx-28">
            {
                categories.map(category=><Category key={category.id} category={category}></Category>)
            }
        </div>
        </div>
    );
};

export default CategoryList;