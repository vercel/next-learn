import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

const ReactCusdis = dynamic(
  () => import('react-cusdis').then(mod => mod.ReactCusdis),
  { ssr: false }
)

export default function Post({ postId, postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <ReactCusdis
        style={{
          marginTop: '4rem'
        }}
        attrs={{
          host: 'https://yiksanchan-cusdis.vercel.app',
          appId: '0f241fee-d6dc-41c4-87a8-3163947957df',
          pageId: postId,
          pageTitle: postData.title
        }}
      />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postId: params.id,
      postData
    }
  }
}
