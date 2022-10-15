import { MailOutlined, GlobalOutlined, PhoneOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import React from 'react';
import 'antd/dist/antd.css';

const App = (props) => {
    const { profile, update, deleteProfile } = props

    return (
        <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', marginTop: '9px', marginBottom: 'auto' }}>
            <div className='ant card ant-card-bordered' style={{ width: '300px', height: '440', marginBottom: "auto" }}>
                <div className='ant-card-cover' style={{ backgroundColor: '#d2d9d975' }}>
                    <div className='cardHeadImage' style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            alt="https://joeschmoe.io/api/v1/random"
                            src={profile.img}
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
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', fontSize:'20px' }}>
                        <div style={{  cursor:'pointer' }}>
                            <EditOutlined onClick={() => update(profile)} />
                        </div>
                        <div style={{ float: 'right', marginLeft: 'auto', cursor:'pointer'}} >
                            <DeleteOutlined  onClick={() => deleteProfile(profile.id)} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;