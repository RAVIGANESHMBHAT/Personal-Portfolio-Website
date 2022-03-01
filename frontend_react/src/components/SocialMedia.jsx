import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/raviganesh-m-31b04015b" target="_blank">
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="mailto:raviganeshmbhat999@gmail.com" target="_blank">
                <GoMail />
            </a>
        </div>
        <div>
            <a href="https://github.com/RAVIGANESHMBHAT" target="_blank">
                <BsGithub />
            </a>
        </div>
    </div>
);

export default SocialMedia;

