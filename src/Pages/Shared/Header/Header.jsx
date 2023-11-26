import React from 'react';
import logo from '../../../assets/logo.png'
import moment from "moment";
moment().format();


const Header = () => {
    return (
      <div className='text-center my-12'>
        <img className='mx-auto' src={logo} alt="" />
        <p className='text-lg font-normal my-5'>Journalism Without Fear or Favour</p>
        <p className='my-2'>{moment().format("dddd, MMMM D, YYYY ")}</p>
      </div>
    );
};

export default Header;