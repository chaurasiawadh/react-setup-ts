import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchGetApiCallExample} from '../../store/actions/example';

const HomeComponent = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchGetApiCallExample())
    },[]);


    return (
        <div>
            <h1>Home Component</h1>
        </div>
    )
}

export default HomeComponent;
