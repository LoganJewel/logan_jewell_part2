import * as React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {content} from '../components/layout.module.css'
import {aboutText} from '../components/layout.module.css'
import DadMDX from '../DeckInfo/DarkArmedDragon.mdx'
import Layout from '../components/layout'
import header from '../components/layout.module.css'

const Dad = () =>{
  return (
    <main>
      <Layout pageHeading = 'Dark Armed Dragon'>  
        <div className= {header}>
          <StaticImage src='../images/DarkArmedDragon.jpg' alt=''></StaticImage>
          <h1 className = {content}>Dark Armed Dragon</h1>
        </div>
      <div className ={aboutText}>
        <DadMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Dad;