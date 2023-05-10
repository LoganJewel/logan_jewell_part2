import * as React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import {container} from './TheDecks.module.css'
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

          <li className={`${navLinkItem} ${menu}`}>
            <a href="#" className = {navLinkText}>
              Choose A Banished Deck:
            </a>
            <div className={menuContent}>
              <Link to="/DarkArmedDragon">Dark Armed Dragon</Link>
            </div>
          </li>
        </ul>
      </nav>

    </main>
  );
};

export default TheDecks;