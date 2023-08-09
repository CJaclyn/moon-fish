import Head from "next/head";
import Link from "next/link";
import { fetchAPI } from "../lib/api";
import BlogCard from "../components/BlogCard";

export default function Home({ postData }) {
  const posts = postData["data"];
  const post = [];

  function getPosts() {
    for (let i in posts) {
      post.push(posts[i].attributes);
    }
    return post;
  }

  getPosts();

  return (
    <div className="page-home page">
      <Head>
        <title>Moon Fish — A Vietnamese Culture Blog</title>
        <meta
          name="description"
          content="Moon Fish, a Vietnamese culture blog that covers a variety of topics such as language, history, arts, and society."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="featured-posts">
          <h2>Featured Posts</h2>
          <div className="posts-container">
            {post.map(
              ({ featured, slug, title, description, thumbnail }) =>
                featured && (
                  <BlogCard
                    key={slug}
                    slug={slug}
                    title={title}
                    description={description}
                    thumbnail={thumbnail.data.attributes.url}
                  />
                )
            )}
          </div>
        </div>
        <div className="recent-posts">
          <h2>Recent Posts</h2>
          <div className="posts-container">
            {post.slice(0, 4).map(({ slug, title, description, thumbnail }) => (
              <BlogCard
                key={slug}
                slug={slug}
                title={title}
                description={description}
                thumbnail={thumbnail.data.attributes.url}
              />
            ))}
          </div>
        </div>
        <Link href="/all-posts">
          <a className="button">All Posts</a>
        </Link>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const postData = await fetchAPI(`posts?sort[0]=datePosted:desc&populate=*`);

  return {
    props: {
      postData,
    },
    revalidate: 60,
  };
}
