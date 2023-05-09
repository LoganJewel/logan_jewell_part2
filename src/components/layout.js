import * as React from 'react'
import {Link} from 'gatsby'
import {container} from './layout.module.css'
import {heading} from './layout.module.css'
import {navLinks} from './layout.module.css'
import {navLinkItem} from './layout.module.css'
import {navLinkText} from './layout.module.css'
import {backgroundImage} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from './layout.module.css'
import {siteTitle} from './layout.module.css'

const Layout = ({siteTitle, children }) =>{
    return (
        <main className = {container}>
            <p className = {heading}>{siteTitle}</p>
            <StaticImage src='../images/YugiohHiero.jpg' alt='' className={backgroundImage}></StaticImage>
            <nav>
                <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/TierZeroAbout" className={navLinkText}>TierZeroAbout</Link></li>
                <li className={navLinkItem}><Link to="/TheDecks" className={navLinkText}>TheDecks</Link></li>
                </ul>
            </nav>
            {children}
        </main>
    );
};

export default Layout;