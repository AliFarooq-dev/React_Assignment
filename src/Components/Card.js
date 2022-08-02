import { MailOutlined, GlobalOutlined, PhoneOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
const { Meta } = Card

const App = ({ name, email, website, phone }) => (
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
                <h5 style={{ margin: 'auto', fontWeight: 'normal' }}>{name}</h5>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px' }}>
                    <div >
                        < MailOutlined />
                    </div>
                    <p style={{ marginLeft: '15px', fontWeight: 'lighter', fontSize: '18px' }}> {email}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px' }}>
                    <div >
                        <PhoneOutlined />
                    </div>
                    <p style={{ marginLeft: '15px', fontWeight: "lighter", fontSize: '18px' }}> {phone}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px' }}>
                    <div style={{  fontWeight: 'lighter' }}>
                        <GlobalOutlined />
                    </div>
                    <p style={{ marginLeft: '15px', fontWeight: "lighter", fontSize: "17px" }}> {website}</p>
                </div>
            </div>
        </div>
    </div>
);

export default App;