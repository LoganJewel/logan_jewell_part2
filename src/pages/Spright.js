import * as React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from '../components/layout.module.css'
import {aboutText} from '../components/layout.module.css'
import SprightMDX from '../DeckInfo/Yatalocke.mdx'
import Layout from '../components/layout'
import header from '../components/layout.module.css'

const Spright = () =>{
  return (
    <main>
      <Layout pageHeading = 'Spright'>  
        <div className= {header}>
          <StaticImage src='../images/Spright.jpg' alt=''></StaticImage>
          <h1 className = {content}>Spright</h1>
        </div>
      <div className ={aboutText}>
        <SprightMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Spright;