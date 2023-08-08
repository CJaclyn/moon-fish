import Link from "next/link";

export default function BlogCard(props) {
  return (
    <Link href={`/post/${props.slug}`}>
      <div className="post-container">
        <img src={props.thumbnail} alt="blog post thumbnail" />
        <div className="post-info">
          <h3 className="post-title">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
