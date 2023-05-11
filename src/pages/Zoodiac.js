import * as React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from '../components/layout.module.css'
import {aboutText} from '../components/layout.module.css'
import ZooMDX from '../DeckInfo/Zoodiac.mdx'
import Layout from '../components/layout'
import header from '../components/layout.module.css'

const Zoo = () =>{
  return (
    <main>
      <Layout pageHeading = 'Zoodiac'>  
        <div className= {header}>
          <StaticImage src='../images/Zoodiac.jpg' alt=''></StaticImage>
          <h1 className = {content}>Zoodiacs</h1>
        </div>
      <div className ={aboutText}>
        <ZooMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Zoo;