import React from 'react';
import Event from '../Event/Event';

const events = [
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'Animal Shelter',
        pic: 'animalShelter.png'
    },
    {
        name: 'Bird House',
        pic: 'birdHouse.png'
    },
    {
        name: 'Good Student',
        pic: 'goodEducation.png'
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    }
];
const Home = () => {
    return (
        <div className="row">
            {
                events.map(event => <Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;