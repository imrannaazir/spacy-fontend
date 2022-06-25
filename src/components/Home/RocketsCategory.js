import React from 'react';
import ExploreOurRockets from './ExploreOurRockets';

const RocketsCategory = () => {
    return (
        <div
            id='rockets'>
            <ExploreOurRockets api="rockets" />
        </div>
    );
};

export default RocketsCategory;