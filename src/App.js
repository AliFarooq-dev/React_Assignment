import React, { useRef } from "react";
import { useState } from 'react'
import Card from './Components/Card'
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const App = () => {
    const [usersProfile, setusersProfile] = useState([
        {
            id: 1,
            name: 'Ali farooq',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712'
        },
        {
            id: 2,
            name: 'Prof. Faizan-ur-rehman Farooqi',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712'
        },
        {
            id: 3,
            name: 'John wick',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712'
        },
        {
            id: 4,
            name: 'Jason bourne',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712'
        }
    ])
    const [tempProfile, settempProfile] = useState({ id: '', name: "", email: '', website: '', phone: '' });

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (e) => {
        
        editProfile(tempProfile.id, tempProfile.email, tempProfile.phone, tempProfile.website, tempProfile.name);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const modalRef = useRef(null);

    const update = (profile) => {
        modalRef.current.click();
        settempProfile({ id: profile.id, name: profile.name, phone: profile.phone, website: profile.website, email: profile.email });
    };
    const onChange = (e) => {
        settempProfile(e.target.value);
    };
    const editProfile = (id, email, phone, website, name) => {
        let newProfile = tempProfile
        for (let index = 0; index < usersProfile.length; index++) {
            if (usersProfile[index].id === newProfile.id) {
                usersProfile.name = name;
                usersProfile.phone = phone;
                usersProfile.website = website;
                usersProfile.email = email;
                break;
            }
        }
        setusersProfile(newProfile);
    }
    return (
        <>
            <div>
                <Button type="primary" ref={modalRef} style={{ display: 'none' }} onClick={showModal}>
                    helo
                </Button>
                <Modal title={tempProfile.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: 'auto' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                            <h6 style={{ fontWeight: 'lighter', margin: '15px' }} >Name</h6>
                            <TextField
                                InputLabelProps={{ shrink: false }}
                                label=""
                                id="ename"
                                name="ename"
                                value={tempProfile.name}
                                size="small"
                                onChange={onChange}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                            <h6 style={{ fontWeight: 'lighter', margin: '15px' }} >Phone</h6>
                            <TextField
                                InputLabelProps={{ shrink: false }}
                                label="."
                                id="phone"
                                name="phone"
                                value={tempProfile.phone}
                                size="small"
                                onChange={onChange}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', }}>
                            <h6 style={{ fontWeight: 'lighter', margin: '15px' }} >Email</h6>
                            <TextField
                                InputLabelProps={{ shrink: false }}
                                label=""
                                id="email"
                                name="email"
                                value={tempProfile.email}
                                size="small"
                                onChange={onChange}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', }}>
                            <h6 style={{ fontWeight: 'lighter', margin: '15px' }} >Website</h6>
                            <TextField
                                InputLabelProps={{ shrink: false }}
                                label="."
                                id="website"
                                name="website"
                                value={tempProfile.website}
                                size="small"
                                onChange={onChange}
                            />
                        </div>
                    </Box>
                </Modal>
            </div>
            <div className="row my-3" style={{ display: 'flex', flexWrap: "wrap", margin: '10px' }}>
                {usersProfile.map((profile, index) => {
                    return <Card profile={profile} key={index} update={update} />
                })}
            </div>
            <div>
            </div>
        </>
    );
};

export default App;

