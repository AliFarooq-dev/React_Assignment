import React from "react";
import { useState, useEffect } from 'react'
import Card from './Components/Card'

const App = () => {
    const [usersProfile, setusersProfile] = useState([
        {
            name: 'Ali farooq',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk'
        }
    ])

    return (
        <>
            <div>
                {usersProfile.map((profile, index) => {
                    return <Card name={profile.name} email={profile.email} website={profile.website} key={index}/>
                })}
            </div>
        </>
    );
};

export default App;

