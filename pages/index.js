import Head from 'next/head';
import Link from 'next/link';
import Moment from 'react-moment';
import { fetchAPI } from '../lib/api';

export default function Home({ postData }) {
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
        <title>Moon Fish — A Vietnamese Culture Blog</title>
        <meta
          name='description'
          content='Moon Fish, a Vietnamese culture blog.'
        />
        <meta
          name='google-site-verification'
          content='MbW6JHS758oGSsswA8wrRWsB2MU4fPisD0WsjuIpEtU'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='featured-posts'>
          <h2 className='highlight'>Featured Posts</h2>
          <div className='posts-container'>
            {post.map(({ featured, slug, datePosted, title, description }) => (
              <Link href={`/post/${slug}`} key={slug}>
                {featured == true ? (
                  <div className='post-container'>
                    <p className='post-date'>
                      <Moment format='MMMM DD, YYYY'>{datePosted}</Moment>
                    </p>
                    <h3 className='post-title'>{title}</h3>
                    {description.length > 100 ? (
                      <p className='post-preview'>{`${description.substr(
                        0,
                        100
                      )}...`}</p>
                    ) : (
                      <p className='post-preview'>{description}</p>
                    )}
                  </div>
                ) : (
                  ''
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className='recent-posts'>
          <h2 className='highlight'>Recent Posts</h2>
          <div className='posts-container'>
            {post
              .slice(0, 4)
              .map(({ slug, datePosted, title, description }) => (
                <Link href={`/post/${slug}`} key={slug} passHref>
                  <div className='post-container'>
                    <p className='post-date'>
                      <Moment format='MMMM DD, YYYY'>{datePosted}</Moment>
                    </p>
                    <h3 className='post-title'>{title}</h3>
                    {description.length > 100 ? (
                      <p className='post-preview'>{`${description.substr(
                        0,
                        100
                      )}...`}</p>
                    ) : (
                      <p className='post-preview'>{description}</p>
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <Link href='/all-posts'>
          <a className='button'>All Posts</a>
        </Link>
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
