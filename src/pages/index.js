import * as React from 'react'
import Layout from '../components/layout'
//import BackgroundImage from 'gatsby-background-image'
import {graphql} from 'gatsby'

//import {StaticImage} from "gatsby-plugin-image";

const Home = () =>{
  return (
    <main>
      <Layout pageHeading='Welcome To The Shadow Realm!' pageTitle='Home Page'>
      The place where all Tier 0 Decks Reside.....
      </Layout>
    </main>
  );
};

export default Home;
