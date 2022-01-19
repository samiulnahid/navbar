import React from 'react'
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const SocialNav = () => {
    return (
        <div>
            <div className="social-media">
            <ul className="social-media-desktop">
                <li>
                <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_thapa">
                    <FaFacebookSquare className="facebook" />
                </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/thapatechnical/"
                    target="_thapa">
                    <FaInstagramSquare className="instagram" />
                </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_thapa">
                    <FaYoutubeSquare className="youtube" />
                </a>
                </li>
            </ul>

            {/* hamburget menu start  */}
            <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
                </a>
            </div>
            </div>
        </div>
    )
}

export default SocialNav
