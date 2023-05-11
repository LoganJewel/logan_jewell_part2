import * as React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from '../components/layout.module.css'
import {aboutText} from '../components/layout.module.css'
import SPYRALMDX from '../DeckInfo/SPYRAL.mdx'
import Layout from '../components/layout'
import header from '../components/layout.module.css'

const SPYRAL = () =>{
  return (
    <main>
      <Layout pageHeading = 'SPYRALs'>  
        <div className= {header}>
          <StaticImage src='../images/SPYRAL.jpg' alt=''></StaticImage>
          <h1 className = {content}>SPYRALs</h1>
        </div>
      <div className ={aboutText}>
        <SPYRALMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default SPYRAL;