import React from 'react';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/Navbar/NavBar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightsideNav from '../Shared/RightSideNav/RightsideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';



const Home = () => {
  const news = useLoaderData();
  console.log(news);
    return (
      <div className="font-poppins">
        <Header></Header>
        <BreakingNews></BreakingNews>
        <NavBar></NavBar>
      
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="col-span-2 ">
            <h2 className='text-xl font-semibold mb-5'>Dragon News Home</h2>
            {news.map((aNews) => (
              <NewsCard key={aNews._id} news={aNews}></NewsCard>
            ))}
          </div>
          <div>
            <RightsideNav></RightsideNav>
          </div>
        </div>
      </div>
    );
};

export default Home;