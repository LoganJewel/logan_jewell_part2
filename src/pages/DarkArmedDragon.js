import * as React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import {container} from './TierZeroAbout.module.css'
import {navLinks} from './TierZeroAbout.module.css'
import {navLinkItem} from './TierZeroAbout.module.css'
import {navLinkText} from './TierZeroAbout.module.css'
import {backgroundImage} from './TierZeroAbout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from './TierZeroAbout.module.css'
import {aboutText} from './TierZeroAbout.module.css'
import DadMDX from '../DeckInfo/DarkArmedDragon.mdx'

const Dad = () =>{
  return (
    <main>
      <StaticImage src='../images/DarkArmedDragon.jpg' alt='' className={backgroundImage}></StaticImage>
      <div className ={container}>
      <h1 className = {content}>Dark Armed Dragon</h1>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/TheDecks" className={navLinkText}>TheDecks</Link></li>
        </ul>
      </nav>
      <div className ={aboutText}>
        <DadMDX/>
      </div>
      </div>
    </main>
  );
};

export default Dad;