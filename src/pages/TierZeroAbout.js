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
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {AboutMDX} from './about.mdx'

const TierZeroAbout = () =>{
  return (
    <main>
      <StaticImage src='../images/MokeyMokey.png' alt='' className={backgroundImage}></StaticImage>
      <h1 className = {content}>What Is A Tier Zero Deck?</h1>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/TheDecks" className={navLinkText}>TheDecks</Link></li>
        </ul>
      </nav>
      <MDXRenderer>{AboutMDX}</MDXRenderer>
    </main>
  );
};

export default TierZeroAbout;