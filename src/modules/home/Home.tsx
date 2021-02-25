import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchGetApiCallExample} from '../../store/actions/example';

const HomeComponent = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.homeData);
    console.log('store', store);    

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
