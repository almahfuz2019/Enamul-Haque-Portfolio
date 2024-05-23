import React from 'react';
import ForConnected from '../ForConnected/ForConnected';
import AllBlogs from '../All Blogs/Blogs';
import WhyChooseEnam from '../Shared/WhyChooseEnam';
import OwnerSpeech from '../Shared/OwnerSpeech';
import Services from '../Shared/Services';
import FreeHomeValuation from '../Shared/FreeHomeValuation';

const Home = () => {
    return (
        <div>
            <WhyChooseEnam/>
            <OwnerSpeech/>
            <Services/>
            <FreeHomeValuation/>
            <AllBlogs/>
            <ForConnected/>
        </div>
    );
};

export default Home;