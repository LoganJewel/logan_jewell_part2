import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from '../components/layout.module.css'
import TearMDX from '../DeckInfo/TearlamentIshizu.mdx'
import Layout from '../components/layout'
import {header} from '../components/layout.module.css'
import {pageImage} from '../components/layout.module.css'

const Tear = () =>{
  return (
    <main>
      <Layout pageHeading = 'Tearlament'>  
        <div className= {header}>
          <StaticImage src='../images/Tearlaments.jpg' alt='' className={pageImage}></StaticImage>
        </div>
      <div className ={aboutText}>
        <TearMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Tear;