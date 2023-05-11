import * as React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from '../components/layout.module.css'
import {aboutText} from '../components/layout.module.css'
import PePeMDX from '../DeckInfo/PerforMagePal.mdx'
import Layout from '../components/layout'
import header from '../components/layout.module.css'

const PePe = () =>{
  return (
    <main>
      <Layout pageHeading = 'PerforMage And PerformPal'>  
        <div className= {header}>
          <StaticImage src='../images/Performpal.jpg' alt=''></StaticImage>
          <h1 className = {content}>PerforMage And PerformPal</h1>
        </div>
      <div className ={aboutText}>
        <PePeMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default PePe;