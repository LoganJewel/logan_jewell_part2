import * as React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from '../components/layout.module.css'
import {aboutText} from '../components/layout.module.css'
import NekrozMDX from '../DeckInfo/Nekroz.mdx'
import Layout from '../components/layout'
import header from '../components/layout.module.css'

const Nekroz = () =>{
  return (
    <main>
      <Layout pageHeading = 'Nekroz'>  
        <div className= {header}>
          <StaticImage src='../images/Nekroz of Brionac.jpg' alt=''></StaticImage>
          <h1 className = {content}>Nekroz</h1>
        </div>
      <div className ={aboutText}>
        <NekrozMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Nekroz;