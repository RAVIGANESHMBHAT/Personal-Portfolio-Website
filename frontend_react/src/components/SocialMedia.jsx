import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <GoMail />
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
);

export default SocialMedia;

