import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";

export default function Post({ postData }) {
  const post = postData["data"][0].attributes;

  return (
    <div className="page-post">
      <Head>
        <title>{post.title}</title>
        {post.seoDescription == null ? (
          <meta name="description" content={post.description} />
        ) : (
          <meta name="description" content={post.seoDescription} />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <article className="page-container">
          <p className="post-date">
            <Moment format="MMMM DD, YYYY">{post.datePosted}</Moment>
          </p>
          <h1>{post.title}</h1>
          <p className="post-content">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </p>
        </article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const postData = await fetchAPI(
    `posts?filters[slug][$eq]=${params.slug}&populate=*`
  );

  return {
    props: {
      postData,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const postData = await fetchAPI(`posts`);

  const posts = postData["data"];
  const post = [];

  function getPosts() {
    for (let i in posts) {
      post.push(posts[i].attributes);
    }
    return post;
  }

  getPosts();

  return {
    paths: post.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: "blocking",
  };
}
