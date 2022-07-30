import { MailOutlined, GlobalOutlined, PhoneOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import React from 'react'
const { Meta } = Card

const App = ({ name, email, website, phone }) => (
    <div className="col-md-3 my-1" style={{ margin: '15px' }}>
        <div className='ant card ant-card-bordered' style={{width: '300px', height: '400px'}}>
            <div className='ant-card-cover' style={{ backgroundColor: '#d2d9d975' }}>
                <div className='cardHeadImage' style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        alt="Avatar"
                        src="https://joeschmoe.io/api/v1/random"
                        style={{ width: '250px', height: '200px' }}
                    />
                </div>
            </div>
            <div className='ant-card-body'>
                <h5 style={{ margin: '10px', fontWeight: 'normal' }}>{name}</h5>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px' }}>
                    <div style={{ fontSize: '14px' }}>
                        < MailOutlined />
                    </div>
                    <p style={{ marginLeft: '15px', fontWeight: 'normal' }}> {email}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px' }}>
                    <div style={{ fontSize: '14px' }}>
                        <PhoneOutlined  />
                    </div>
                    <p style={{ marginLeft: '15px', fontWeight: 'normal' }}> {phone}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 'normal' }}>
                        <GlobalOutlined />
                    </div>
                    <p style={{ marginLeft: '15px' }}> {website}</p>
                </div>
            </div>
        </div>
    </div>
);

export default App;