import React from 'react'
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Contacts from './Contacts';
import './CV.css';

const UserCV = () => {
    return (
        <div className='userCv'>
            <h1>Nazrin Osmanova CV</h1>
            <Experience />
            <PersonalInfo />
            <Contacts />
        </div>
    )
}

export default UserCV