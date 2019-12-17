import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResource } from '../actions';
import People from './resources/People';
import Films from './resources/Films';
import Planets from './resources/Planets';
import Species from './resources/Species';
import Starships from './resources/Starships';
import Vehicles from './resources/Vehicles';

const Resource = ({ active, name }) => {
    const dispatch = useDispatch();
    const resource = useSelector(state => state.resources[name]);

    useEffect(() => {
        if (active && !resource)
            dispatch(fetchResource(name));
    }, [active, dispatch]);

    if (!resource || resource.isLoading)
        return <div>Loading...</div>;
    if (resource.error)
        return <div>Error occurred</div>;

    switch (name) {
        case 'people': return <People data={resource.payload} />;
        case 'planets': return <Planets data={resource.payload} />;
        case 'films': return <Films data={resource.payload} />;
        case 'species': return <Species data={resource.payload} />;
        case 'vehicles': return <Vehicles data={resource.payload} />;
        case 'starships': return <Starships data={resource.payload} />;
        default: return <div>Wrong resources</div>;
    }
};

export default memo(Resource);
