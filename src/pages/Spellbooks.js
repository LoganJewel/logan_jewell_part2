import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from '../components/layout.module.css'
import SpellMDX from '../DeckInfo/Spellbooks.mdx'
import Layout from '../components/layout'
import {header} from '../components/layout.module.css'
import {pageImage} from '../components/layout.module.css'

const Spell = () =>{
  return (
    <main>
      <Layout pageHeading = 'Spellbooks'>  
        <div className= {header}>
          <StaticImage src='../images/Spellbook.jpg' alt='' className = {pageImage}></StaticImage>
        </div>
      <div className ={aboutText}>
        <SpellMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Spell;