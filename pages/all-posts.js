import Head from "next/head";
import { fetchAPI } from "../lib/api";
import BlogCard from "../components/BlogCard";

export default function AllPosts({ postData }) {
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
        <title>Moon Fish Blog Posts</title>
        <meta
          name="description"
          content="Vietnamese culture and history blog Moon Fish posts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="recent-posts">
          <h2 className="highlight">All Posts</h2>
          <div className="posts-container">
            {post.map(({ slug, title, description, thumbnail }) => (
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
