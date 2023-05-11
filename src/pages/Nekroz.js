import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from '../components/layout.module.css'
import NekrozMDX from '../DeckInfo/Nekroz.mdx'
import Layout from '../components/layout'
import {header} from '../components/layout.module.css'
import {pageImage} from '../components/layout.module.css'

const Nekroz = () =>{
  return (
    <main>
      <Layout pageHeading = 'Nekroz'>  
        <div className= {header}>
          <StaticImage src='../images/Nekroz of Brionac.jpg' alt='' className = {pageImage}></StaticImage>
        </div>
      <div className ={aboutText}>
        <NekrozMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Nekroz;