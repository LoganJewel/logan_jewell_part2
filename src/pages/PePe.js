import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from '../components/layout.module.css'
import PePeMDX from '../DeckInfo/PerforMagePal.mdx'
import Layout from '../components/layout'
import {header} from '../components/layout.module.css'
import {pageImage} from '../components/layout.module.css'

const PePe = () =>{
  return (
    <main>
      <Layout pageHeading = 'PerforMage And PerformPal'>  
        <div className= {header}>
          <StaticImage src='../images/Performpal.jpg' alt='' className = {pageImage}></StaticImage>
        </div>
      <div className ={aboutText}>
        <PePeMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default PePe;