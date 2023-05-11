import * as React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from '../components/layout.module.css'
import {aboutText} from '../components/layout.module.css'
import TearMDX from '../DeckInfo/TearlamentIshizu.mdx'
import Layout from '../components/layout'
import header from '../components/layout.module.css'

const Tear = () =>{
  return (
    <main>
      <Layout pageHeading = 'Tearlament Ishizu'>  
        <div className= {header}>
          <StaticImage src='../images/Tearlament Ishizu.png' alt=''></StaticImage>
          <h1 className = {content}>Tearlament Ishizu</h1>
        </div>
      <div className ={aboutText}>
        <TearMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Tear;