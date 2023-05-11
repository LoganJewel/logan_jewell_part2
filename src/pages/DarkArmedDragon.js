import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from '../components/layout.module.css'
import DadMDX from '../DeckInfo/DarkArmedDragon.mdx'
import Layout from '../components/layout'
import {header} from '../components/layout.module.css'
import {pageImage} from '../components/layout.module.css'

const Dad = () =>{
  return (
    <main>
      <Layout pageHeading = 'Dark Armed Dragon'>  
        <div className= {header}>
          <StaticImage src='../images/DarkArmedDragon.jpg' alt='' className = {pageImage}></StaticImage>
        </div>
      <div className ={aboutText}>
        <DadMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Dad;