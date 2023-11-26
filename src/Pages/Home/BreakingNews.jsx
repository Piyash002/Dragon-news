import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
      <div className=" flex  bg-[#F3F3F3]">
        <button className="btn btn-denger bg-[#D72050] text-white">BreakingNews</button>
        <Marquee
          className="text-xl bg-[#F3F3F3]"
          pauseOnHover={true}
          speed={100}
          gradientColor="[255, 255, 255]"
        >
          <Link className="mx-4" to="./">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>

          <Link className="mx-4" to="./">
            I can be a React component, multiple React components, or just some
            text.
          </Link>

          <Link className="mx-4" to="./">
            I can be a React component, multiple React components, or just some
            text.
          </Link>

          <Link className="mx-4" to="./">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </Marquee>
      </div>
    );
};

export default BreakingNews;