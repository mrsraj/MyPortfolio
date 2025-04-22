import React from 'react';
import style from './Footer.module.css'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Bio from '../../Data/Bio';

function Footer() {
    return (
        <div className={style.footer_container}>
            <footer className={style.footer_wrapper}>
                <h1 className={style.logo}>Sachin Raj</h1>
                <nav className={style.nav}>
                    <a className={style.nav_link} href="#about">About</a>
                    <a className={style.nav_link} href="#skills">Skills</a>
                    <a className={style.nav_link} href="#experience">Experience</a>
                    <a className={style.nav_link} href="#projects">Projects</a>
                    <a className={style.nav_link} href="#education">Education</a>
                </nav>
                <div className={style.social_media_icons}>
                    <a className={style.social_media_icon} href={Bio.facebook} target="display">
                        <Facebook size={24} />
                    </a>
                    <a className={style.social_media_icon} href={Bio.twitter} target="display">
                        <Twitter size={24} />
                    </a>
                    <a className={style.social_media_icon} href={Bio.linkedin} target="display">
                        <Linkedin size={24} />
                    </a>
                    <a className={style.social_media_icon} href={Bio.insta} target="display">
                        <Instagram size={24} />
                    </a>
                </div>
                <p className={style.copyright}>
                    &copy; 2024 Sachin Raj. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default Footer;
