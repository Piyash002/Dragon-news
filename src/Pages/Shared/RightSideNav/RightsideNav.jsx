import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone1 from'../../../assets/qZone1.png';
import qZone2 from'../../../assets/qZone2.png';
import QZone3 from'../../../assets/qZone3.png';


const RightsideNav = () => {
    return (
      <div className="mb-6">
        {/* Log in section */}
        <div className="p-4 space-y-3">
          <h2 className="text-2xl font-bold">Login with</h2>
          <button className="btn btn-outline w-full text-blue-400 ">
            <FaGoogle />
            Log in with Google
          </button>
          <button className="btn btn-outline w-full text-black-400 ">
            <FaGithub />
            Log in with Github
          </button>
        </div>
        {/* Social media section */}
        <div className="p-4 ">
          <h2 className="text-xl font-semibold mb-5">Find Us</h2>
          <a
            className="p-4  text-lg font-poppins flex items-center border rounded-t-lg"
            href=""
          >
            <FaFacebook className="text-blue-700 mr-2" />
            Facebook
          </a>
          <a
            className="p-4  text-lg font-poppins flex items-center border-x "
            href=""
          >
            <FaTwitter className="text-blue-400 mr-2" />
            Facebook
          </a>
          <a
            className="p-4  text-lg font-poppins flex items-center border rounded-b-lg"
            href=""
          >
            <FaInstagram className="text-orange-700 mr-2" />
            Facebook
          </a>
        </div>
        {/* Q-Zone */}
        <div className="p-4 ">
          <div className="bg-[#F3F3F3] p-4 ">
            <h2 className="text-2xl font-bold mb-8 ">Q-zone</h2>
            <img src={QZone1} className='py-4' />
            <img src={qZone2} className='py-4' />
            <img src={QZone3} className='py-4' />
          </div>
        </div>
      </div>
    );
};

export default RightsideNav;