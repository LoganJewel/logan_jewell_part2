import * as React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from '../components/layout.module.css'
import {aboutText} from '../components/layout.module.css'
import SpellMDX from '../DeckInfo/Spellbooks.mdx'
import Layout from '../components/layout'
import header from '../components/layout.module.css'

const Spell = () =>{
  return (
    <main>
      <Layout pageHeading = 'Spellbooks'>  
        <div className= {header}>
          <StaticImage src='../images/Spellbook.jpg' alt=''></StaticImage>
          <h1 className = {content}>Spellbooks</h1>
        </div>
      <div className ={aboutText}>
        <SpellMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Spell;