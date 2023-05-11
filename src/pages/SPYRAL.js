import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from '../components/layout.module.css'
import SPYRALMDX from '../DeckInfo/SPYRAL.mdx'
import Layout from '../components/layout'
import {header} from '../components/layout.module.css'
import {pageImage} from '../components/layout.module.css'

const SPYRAL = () =>{
  return (
    <main>
      <Layout pageHeading = 'SPYRALs'>  
        <div className= {header}>
          <StaticImage src='../images/SPYRAL.jpg' alt='' className={pageImage}></StaticImage>
        </div>
      <div className ={aboutText}>
        <SPYRALMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default SPYRAL;