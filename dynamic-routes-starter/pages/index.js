import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

const Home = ({ allPostsData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>
        Hello, I’m <strong>Shu</strong>. I write code at{' '}
        <a href="https://zeit.co">ZEIT</a>, the team behind{' '}
        <a href="https://nextjs.org/">Next.js</a>. You can contact me via{' '}
        <a href="https://twitter.com/chibicode">Twitter</a> or{' '}
        <a href="mailto:chibicode@zeit.co">email</a>.
      </p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ slug, date, title }) => (
          <li className={utilStyles.listItem}>
            {title}
            <br />
            {slug}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home
