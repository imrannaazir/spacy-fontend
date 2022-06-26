import React from 'react';
import ExploreOurRockets from './ExploreOurRockets';

const Drones = () => {
    return (
        <div
            id='drones'>
            <ExploreOurRockets api="drones" />
        </div>
    );
};

export default Drones;