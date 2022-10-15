import React, { useRef } from "react";
import { useState } from 'react'
import Card from './Components/Card'
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';

const App = () => {
    const [usersProfile, setusersProfile] = useState([
        {
            id: 1,
            name: 'Ali farooq',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712',
            img: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
        },
        {
            id: 2,
            name: 'Prof. Faizan-ur-rehman Farooqi',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712',
            img: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=CollarSweater&clotheColor=PastelOrange&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Light'
        },
        {
            id: 3,
            name: 'John wick',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712',
            img: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Wayfarers&hatColor=PastelYellow&hairColor=Red&facialHairType=Blank&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Brown'
        },
        {
            id: 4,
            name: 'Hela',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712',
            img: 'https://avataaars.io/?avatarStyle=Transparent&topType=Hijab&accessoriesType=Prescription02&hatColor=Heather&hairColor=BlondeGolden&facialHairType=MoustacheFancy&clotheType=ShirtScoopNeck&clotheColor=Red&eyeType=Close&eyebrowType=UpDownNatural&mouthType=Default&skinColor=Pale'
        },
        {
            id: 5,
            name: 'Tony Stark',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712',
            img: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hatColor=Blue03&hairColor=Platinum&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&clotheColor=Gray02&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Light'
        },
        {
            id: 6,
            name: 'Lucifer kalle',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712',
            img: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Dizzy&eyebrowType=UpDown&mouthType=Eating&skinColor=Pale'
        },
        {
            id: 7,
            name: 'Kristeiin Gray',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712',
            img: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&facialHairColor=Auburn&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
        },
        {
            id: 8,
            name: 'Anastasia steele',
            email: 'Alifarooq@gmail.com',
            website: 'WWW.Alifarooqweb.co.uk',
            phone: '0302-5254712',
            img: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelYellow&eyeType=Default&eyebrowType=AngryNatural&mouthType=Twinkle&skinColor=Pale'
        },
    ])
    const [tempProfile, settempProfile] = useState({ id: '', name: "", email: '', website: '', phone: '' });
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const modalRef = useRef(null);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            editProfile(tempProfile.id, tempProfile.email, tempProfile.phone, tempProfile.website, tempProfile.name);
        }, 1000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const update = (profile) => {
        modalRef.current.click();
        settempProfile({ id: profile.id, name: profile.name, phone: profile.phone, website: profile.website, email: profile.email });
    };

    const onChange = (e) => {
        settempProfile({ ...tempProfile, [e.target.name]: e.target.value });
    };

    const editProfile = (id, email, phone, website, name) => {
        let newUsers = [...usersProfile];
        for (let index = 0; index < usersProfile.length; index++) {
            if (usersProfile[index].id === id) {
                newUsers[index].name = name;
                newUsers[index].email = email;
                newUsers[index].phone = phone;
                newUsers[index].website = website;
                break;
            }
        }
        setusersProfile(newUsers);
    };

    const deleteProfile = (Id) => {
        let newNotes = usersProfile.filter((profile) => profile.id !== Id)
        setusersProfile(newNotes);
    };

    return (
        <>
            <div>
                <Button type="primary" style={{ display: 'none' }} ref={modalRef} onClick={showModal}>
                    Open Modal with async logic
                </Button>
                <Modal
                    title="Title"
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <div className="mb-3 sm" style={{ display: 'flex', flexDirection: 'row' }}>
                        <label htmlFor="name" className="form-label"><h6 style={{ fontWeight: 'lighter', marginTop: '10px', marginRight: '7px' }}>Name</h6></label>
                        <input type="text" style={{ display: 'flex', justifyContent: 'center' }} className="form-control" id="name" name='name' aria-describedby="emailHelp" value={tempProfile.name} onChange={onChange} />
                    </div>
                    <div className="mb-3 sm" style={{ display: 'flex', flexDirection: 'row' }}>
                        <label htmlFor="name" className="form-label"><h6 style={{ fontWeight: 'lighter', marginTop: '10px', marginRight: '7px' }}>Email</h6></label>
                        <input type="text" style={{ display: 'flex', justifyContent: 'center' }} className="form-control" id="email" name='email' aria-describedby="emailHelp" value={tempProfile.email} onChange={onChange} />
                    </div>
                    <div className="mb-3 sm" style={{ display: 'flex', flexDirection: 'row' }}>
                        <label htmlFor="name" className="form-label"><h6 style={{ fontWeight: 'lighter', marginTop: '10px', marginRight: '7px' }}>Phone</h6></label>
                        <input type="text" className="form-control" id="phone" name='phone' aria-describedby="emailHelp" value={tempProfile.phone} onChange={onChange} />
                    </div>

                </Modal>
            </div>
            {/* // */}
            <div style={{ display: 'flex', flexWrap: "wrap", margin: '10px' }} >
                {usersProfile.map((profile, index) => {
                    return <Card profile={profile} key={index} update={update} deleteProfile={deleteProfile} />
                })}
            </div>
            <div>
            </div>
        </>
    );
};
export default App;

