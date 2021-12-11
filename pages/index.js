import Head from 'next/head'
import Link from 'next/link'
import { getAllPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  const post = allPostsData;

  return (
    <div className="page-home page">
      <Head>
        <title>Moon Fish Blog</title>
        <meta name="description" content="Vietnamese culture and history blog Moon Fish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="featured-posts">
          <h2 className="highlight">Featured Posts</h2>
            {post.map(({ id, title, date, featured, description }) => (
              <Link href={`/post/${ id }`} key={ id }>
                {featured == true ? 
                  <div className="post-container">
                    <p className="post-date">{ date }</p>
                    <h3 className="post-title">{ title }</h3>
                    <p className="post-preview">{ description }</p>
                  </div>  
                  : 
                  ""
                }
              </Link>
            ))}
        </div>
        <div className="recent-posts">
          <h2 className="highlight">Recent Posts</h2>
          <div className="posts-container">
            {post.slice(0, 4).map(({ id, title, date, description }) => (
              <Link href={`/post/${ id }`} key={ id } passHref>
                <div className="post-container">
                  <p className="post-date">{ date }</p>
                  <h3 className="post-title">{ title }</h3>
                  <p className="post-preview">{ description }</p>
                </div>                  
              </Link>
            ))}
          </div>
        </div>
        <Link href="/all-posts">
          <a className="button">All Posts</a>
        </Link>
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
