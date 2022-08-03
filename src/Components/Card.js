import { MailOutlined, GlobalOutlined, PhoneOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { useState, useRef } from 'react'
import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';


const App = (props) => {
    const { profile, update, index } = props
    console.log(index)
    return (
        <div className="col-md-3 my-2" style={{ margin: 'auto' }}>
            <div className='ant card ant-card-bordered' style={{ width: '300px', height: '400px', margin: "auto" }}>
                <div className='ant-card-cover' style={{ backgroundColor: '#d2d9d975' }}>
                    <div className='cardHeadImage' style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            alt="https://joeschmoe.io/api/v1/random"
                            src="https://joeschmoe.io/api/v1/random"
                            style={{ width: '250px', height: '200px' }}
                        />
                    </div>
                </div>
                <div className='ant-card-body'>
                    <h5 style={{ margin: 'auto', fontWeight: 'normal' }}>{profile.name}</h5>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' }}>
                        <div >
                            < MailOutlined />
                        </div>
                        <p style={{ marginLeft: '15px', fontWeight: 'lighter', fontSize: '18px' }}> {profile.email}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' }}>
                        <div >
                            <PhoneOutlined />
                        </div>
                        <p style={{ marginLeft: '15px', fontWeight: "lighter", fontSize: '18px' }}> {profile.phone}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' }}>
                        <div style={{ fontWeight: 'lighter' }}>
                            <GlobalOutlined />
                        </div>
                        <p style={{ marginLeft: '15px', fontWeight: "lighter", fontSize: "17px" }}> {profile.website}</p>
                        <Button type="primary" onClick={() => update(profile)}> Click
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default App;