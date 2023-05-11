import * as React from 'react'
import {Link} from 'gatsby'
import {navLinks} from './index.module.css'
import {navLinkItem} from './index.module.css'
import {navLinkText} from './index.module.css'
import {backgroundImage} from './index.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from './index.module.css'

const Home = () =>{
  return (
    <main>
      <StaticImage src='../images/YugiohHiero.jpg' alt='' className={backgroundImage}></StaticImage>
      <h1 className = {content}>Welcome To The Shadow Realm</h1> 
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/TierZeroAbout" className={navLinkText}>TierZeroAbout</Link></li>
          <li className={navLinkItem}><Link to="/TheDecks" className={navLinkText}>TheDecks</Link></li>
        </ul>
      </nav>
    </main>
  );
};

export default Home;