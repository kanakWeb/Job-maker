import React from 'react';
const Category = ({category}) => {
    const{
        logo,
        category_name,
        availability}=category
    return (
        <div className="card rounded-b-[50px] rounded-l-md rounded-e-none bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img
            src={ logo}
            alt="logo"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{  category_name}</h2>
          <p>{  availability}</p>
          
        </div>
      </div>
    );
};

export default Category;