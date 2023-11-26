import React from 'react';
import Header from '../Shared/Header/Header';
import RightsideNav from '../Shared/RightSideNav/RightsideNav';
import { useParams } from 'react-router-dom';
import NavBar from '../Shared/Navbar/NavBar';

const News = () => {
    const {id} = useParams();
    return (
        <div>
        <Header></Header>
        <NavBar></NavBar>
        <div className='grid grid-cols-4'>
            <div className='col-span-3'>
            <h2 className="text-5xl">News Details</h2>
                <p>{id}</p>

            </div>

            <div>
                <RightsideNav></RightsideNav>
            </div>
        </div>


            </div>
       
    );
};

export default News;