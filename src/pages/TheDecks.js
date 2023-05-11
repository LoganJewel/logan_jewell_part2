import * as React from 'react'
import {Link} from 'gatsby'
import {navLinks} from './TheDecks.module.css'
import {navLinkItem} from './TheDecks.module.css'
import {navLinkText} from './TheDecks.module.css'
import {backgroundImage} from './TheDecks.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from './TheDecks.module.css'
import {menu} from './TheDecks.module.css'
import {menuContent} from './TheDecks.module.css'

const TheDecks = () =>{
  return (
    <main>
      <StaticImage src='../images/ShadowRealm.jpg' alt='' className={backgroundImage}></StaticImage>
      <h1 className = {content}>The Hall Of Infamy</h1>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
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
              <Link to="/PePe">PePe</Link>
              <Link to="/Spellbooks">Spellbooks</Link>
              <Link to="/Spright">Spright</Link>
              <Link to="/SPYRAL">SPYRAL</Link>
              <Link to="/Tearlament">Tearlament</Link>
              <Link to="/Yatalocke">Yatalocke</Link>
              <Link to="/Zoodiac">Zoodiacs</Link>
            </div>
      </div>
    </main>
  );
};

export default TheDecks;