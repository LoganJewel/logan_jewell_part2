import * as React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import {container} from './layout.module.css'
import {navLinks} from './layout.module.css'
import {navLinkItem} from './layout.module.css'
import {navLinkText} from './layout.module.css'
import {backgroundImage} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from './layout.module.css'
import {menu} from './layout.module.css'
import {menuContent} from './layout.module.css'

const layout = ( { children }) =>{
  return (
    <main className = {container}>
      <StaticImage src='../images/ShadowRealm.jpg' alt='' className = {backgroundImage}></StaticImage>
      {children}
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/TheDecks" className={navLinkText}>TheDecks</Link></li>
          <li className={navLinkItem}><Link to="/TierZeroAbout" className={navLinkText}>TierZeroAbout</Link></li>
        </ul>
      </nav>
      <div className={menu}>
            <a href="#" className = {navLinkText}>
              Choose A Banished Deck:
            </a>
            <div className={menuContent}>
              <Link to="/DarkArmedDragon">Dark Armed Dragon</Link>
              <Link to="/DragonRulers">DragonRulers</Link>
              <Link to="/Nekroz">Nekroz</Link>
              <Link to="/Pepe">PePe</Link>
              <Link to="/Spellbook">Spellbooks</Link>
              <Link to="/Spright">Spright</Link>
              <Link to="/SPYRAL">SPYRAL</Link>
              <Link to="/Tearlament">Tearlament Ishizu</Link>
              <Link to="/Yatalocke">Yatalocke</Link>
              <Link to="/Zoodiac">Zoodiacs</Link>
            </div>
      </div>
    </main>
  );
};

export default layout;