import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cardImg1 from '../../../assets/1.png'
import cardImg2 from '../../../assets/2.png'
import cardImg3 from '../../../assets/3.png'
import moment from "moment";
import { CiCalendar } from "react-icons/ci";
moment().format();
const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">All Categories</h2>
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            className="block ml-4 text-xl font-semibold "
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
        {/* card section */}

        <div className="space-y-3">
          <div className="card p-2  mt-14">
            <figure>
              <img src={cardImg1} alt="Shoes" />
            </figure>
            <div className="">
              <p className="text-2xl font-semibold text-[#403F3F]">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </p>
              <div className="flex items-center space-x-2 mt-8">
                <div className="text-base font-medium  ">Sports</div>
                <CiCalendar className="font-semibold text-lg" />
                <div className=" font-bold text-lg text-[#9F9F9F]">
                  {moment().format(" MMMM D, YYYY ")}
                </div>
              </div>
            </div>
          </div>
          <div className="card p-2  mt-14">
            <figure>
              <img src={cardImg2} alt="Shoes" />
            </figure>
            <div className="">
              <p className="text-2xl font-semibold text-[#403F3F]">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </p>
              <div className="flex items-center space-x-2 mt-8">
                <div className="text-base font-medium  ">Sports</div>
                <CiCalendar className="font-semibold text-lg" />
                <div className=" font-bold text-lg text-[#9F9F9F]">
                  {moment().format(" MMMM D, YYYY ")}
                </div>
              </div>
            </div>
          </div>
          <div className="card p-2  mt-14">
            <figure>
              <img src={cardImg3} alt="Shoes" />
            </figure>
            <div className="">
              <p className="text-2xl font-semibold text-[#403F3F]">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </p>
              <div className="flex items-center space-x-2 mt-8">
                <div className="text-base font-medium  ">Sports</div>
                <CiCalendar className="font-semibold text-lg" />
                <div className=" font-bold text-lg text-[#9F9F9F]">
                  {moment().format(" MMMM D, YYYY ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LeftSideNav;