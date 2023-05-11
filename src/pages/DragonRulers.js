import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from '../components/layout.module.css'
import DRsMDX from '../DeckInfo/DragonRulers.mdx'
import Layout from '../components/layout'
import {header} from '../components/layout.module.css'
import {pageImage} from '../components/layout.module.css'

const DRs = () =>{
  return (
    <main>
      <Layout pageHeading = 'Dragon Rulers'>  
        <div className= {header}>
          <StaticImage src='../images/DragonRulers.jpg' alt='' className={pageImage}></StaticImage>
        </div>
      <div className ={aboutText}>
        <DRsMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default DRs;