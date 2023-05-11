import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from '../components/layout.module.css'
import SprightMDX from '../DeckInfo/Yatalocke.mdx'
import Layout from '../components/layout'
import {header} from '../components/layout.module.css'
import {pageImage} from '../components/layout.module.css'

const Spright = () =>{
  return (
    <main>
      <Layout pageHeading = 'Spright'>  
        <div className= {header}>
          <StaticImage src='../images/Spright.jpg' alt='' className={pageImage}></StaticImage>
        </div>
      <div className ={aboutText}>
        <SprightMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Spright;