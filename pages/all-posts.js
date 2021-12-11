import Head from 'next/head'
import Link from 'next/link'
import { getAllPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  const post = allPostsData;

  return (
    <div className="page-home page">
      <Head>
        <title>Moon Fish Blog Posts</title>
        <meta name="description" content="Vietnamese culture and history blog Moon Fish posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="recent-posts">
          <h2 className="highlight">All Posts</h2>
          <div className="posts-container">
            {post.map(({ id, title, date, description }) => (
              <Link href={`/post/${ id }`} key={ id }>
                <div className="post-container">
                  <p className="post-date">{ date }</p>
                  <h3 className="post-title">{ title }</h3>
                  <p className="post-preview">{ description }</p>
                </div>                  
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getAllPostsData()
  
  return {
    props: {
      allPostsData
    }
  }
}
