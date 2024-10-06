import React from 'react';
import User from "../../assets/images/USER.png";
const HomeData = () => {
    return (
        <div className="hero bg-base-100  -mb-4">
        <div className="hero-content flex-col mx-24  items-center  lg:flex-row-reverse">
          <img src={User} className="max-w-sm md:w-[30%]  rounded-lg  " />
          <div className=" md:w-[70%]">
            <h1 className="text-5xl md:w-[320px] leading-[60px] font-bold">
              One Step Close To Your <p className="text-blue-300">dream Job</p>
            </h1>
            <p className="py-5 md:w-[90%] text-lg text-justify leading-7">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sint quos numquam voluptatem labore, cupiditate dolores laboriosam
              temporibus, necessitatibus, dignissimos nam quisquam quod explicabo
              omnis repudiandae modi natus deserunt at aliquid.
            </p>
            <button className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600  text-white font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default HomeData;