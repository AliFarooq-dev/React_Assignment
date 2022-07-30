import Modal from "./Components/Modal";
import React from "react";
import { useState, useEffect } from 'react'
import Card from './Components/Card'

const App = () => {
    const [usersProfile, setusersProfile] = useState([
        {
            name: 'Ali farooq',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712'
        },
        {
            name: 'Prof. Faizan-ur-rehman Farooqi',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712'
        },
        {
            name: 'John wick',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712'
        },
        {
            name: 'Jason bourne',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712'
        }
    ])

    return (
        <>
            <div className="row my-3" style={{ display: 'flex',   flexWrap: "wrap", margin: '10px'}}>
                {usersProfile.map((profile, index) => {
                    return <Card name={profile.name} email={profile.email} website={profile.website} key={index} phone={profile.phone}/>
                })}
                <Modal/>
            </div>
        </>
    );
};

export default App;

