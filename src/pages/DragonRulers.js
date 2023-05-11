import * as React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from '../components/layout.module.css'
import {aboutText} from '../components/layout.module.css'
import DRsMDX from '../DeckInfo/DragonRulers.mdx'
import Layout from '../components/layout'
import header from '../components/layout.module.css'

const DRs = () =>{
  return (
    <main>
      <Layout pageHeading = 'Dragon Rulers'>  
        <div className= {header}>
          <StaticImage src='../images/DragonRulers.jpg' alt=''></StaticImage>
          <h1 className = {content}>Dragon Rulers</h1>
        </div>
      <div className ={aboutText}>
        <DRsMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default DRs;