import * as React from 'react'
import {Link} from 'gatsby'
import {container} from './TierZeroAbout.module.css'
import {navLinks} from './TierZeroAbout.module.css'
import {navLinkItem} from './TierZeroAbout.module.css'
import {navLinkText} from './TierZeroAbout.module.css'
import {backgroundImage} from './TierZeroAbout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from './TierZeroAbout.module.css'
import {aboutText} from './TierZeroAbout.module.css'
import AboutMDX from '../DeckInfo/about.mdx'

const TierZeroAbout = () =>{
  return (
    <main>
      <StaticImage src='../images/MokeyMokey.png' alt='' className={backgroundImage}></StaticImage>
      <div className ={container}>
      <h1 className = {content}>What Is A Tier Zero Deck?</h1>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/TheDecks" className={navLinkText}>TheDecks</Link></li>
        </ul>
      </nav>
      <div className ={aboutText}>
        <AboutMDX/>
      </div>
      </div>
    </main>
  );
};

export default TierZeroAbout;