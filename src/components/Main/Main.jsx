import React from 'react';
import {assets} from '../../assets/assets.js';
import './Main.css';

function Main() {
    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
        </div>
    );
}

export default Main;