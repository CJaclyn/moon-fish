import Head from 'next/head';
import Link from 'next/link';
import Moment from 'react-moment';
import { fetchAPI } from '../lib/api';

export default function AllPosts({ postData }) {
  const posts = postData['data'];
  const post = [];

  function getPosts() {
    for (let i in posts) {
      post.push(posts[i].attributes);
    }
    return post;
  }

  getPosts();

  return (
    <div className='page-home page'>
      <Head>
        <title>Moon Fish Blog Posts</title>
        <meta
          name='description'
          content='Vietnamese culture and history blog Moon Fish posts'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='recent-posts'>
          <h2 className='highlight'>All Posts</h2>
          <div className='posts-container'>
            {post.map(({ slug, datePosted, title, description }) => (
              <Link href={`/post/${slug}`} key={slug} passHref>
                <div className='post-container'>
                  <p className='post-date'>
                    <Moment format='MMMM DD, YYYY'>{datePosted}</Moment>
                  </p>
                  <h3 className='post-title'>{title}</h3>
                  <p className='post-preview'>{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const postData = await fetchAPI(`posts?sort[0]=datePosted:desc`);

  return {
    props: {
      postData,
    },
    revalidate: 60,
  };
}
