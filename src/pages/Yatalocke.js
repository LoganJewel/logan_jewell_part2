import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {aboutText} from '../components/layout.module.css'
import YataMDX from '../DeckInfo/Yatalocke.mdx'
import Layout from '../components/layout'
import {header} from '../components/layout.module.css'
import {pageImage} from '../components/layout.module.css'

const Yata = () =>{
  return (
    <main>
      <Layout pageHeading = 'Yatalocke'>  
        <div className= {header}>
          <StaticImage src='../images/Yatalocke.jpg' alt='' className={pageImage}></StaticImage>
        </div>
      <div className ={aboutText}>
        <YataMDX/>
      </div>
      </Layout>
    </main>
  );
};

export default Yata;