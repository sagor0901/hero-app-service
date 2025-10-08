import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

const ShowAllApps = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div className='max-w-11/12 mx-auto my-16'>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
            data.map((app)=><SingleApp key={app.id} app={app}></SingleApp>)
        }
        </div>
        </div>
    );
};

export default ShowAllApps;