import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import styles from '../styles/Home.module.css';

import Header from '../components/header';
import Footer from '../components/footer';

export default class Home extends Component {
  render() {
    let { title, posts } = attributes;
    return (
      <>
        <Head>
            <title>James Drysdale</title>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <Header />

        <Footer />

        {/* <article>
          <h1 className="text-4xl">{title}</h1>
          <HomeContent />
          <ul>
            {posts.map((post, k) => (
              <li key={k}>
                <h2>{post.post_title}</h2>
                <p>{post.description}</p>
              </li>
            ))}
          </ul>
        </article> */}

      </>
    )
  }
}