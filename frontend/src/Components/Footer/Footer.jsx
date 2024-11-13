import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import youtube_icon from '../Assets/youtube_icon.png'
import linkedin_icon from '../Assets/linkedin_icon.png'

function Footer(props) {
    return (
        <div className='footer'>
            <div onClick={() => window.scrollTo(0, 0)} className='footer-logo'>
                <img src={footer_logo} alt=''/>
                <p>Niche & Knit</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <a href='https://www.instagram.com/nguyeenphann' target='_blank' rel='noopener noreferrer'>
                        <img src={instagram_icon} alt='' className='social-img'/>
                    </a>
                </div>
                <div className='footer-icons-container'>
                    <img src={pinterest_icon} alt='' className='social-img'/>
                </div>
                <div className='footer-icons-container'>
                    <img src={youtube_icon} alt='' className='social-img'/>
                </div>
                <div className='footer-icons-container'>
                    <a href='https://www.linkedin.com/in/kh%C3%A1nh-nguy%C3%AAn-a12862326' target='_blank' rel='noopener noreferrer'>
                        <img src={linkedin_icon} alt='' className='social-img'/>
                    </a>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2024 - nguyeenphann.</p>
            </div>
        </div>
    );
}

export default Footer;