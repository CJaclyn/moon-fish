import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";

export default function Post ({ postData }) {
    const post = postData['data'][0].attributes

    return (
        <div className="page-post">
            <Head>
                <title>{ post.title }</title>
                <meta name="description" content={ post.description } />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <article className="page-container">
                    <p className="post-date">
                        <Moment format="MMMM DD, YYYY">{ post.date }</Moment>
                    </p>
                    <p className="updated">
                        Updated&nbsp;
                        <Moment format="MMMM DD, YYYY">{ post.updatedAt }</Moment>
                    </p>
                    <h1 className="highlight">{ post.title }</h1>
                    { post.celebrity === true ? 
                        <>
                        <div className="celebrity-top">
                            <div className="portrait-container">
                                <img src={ post.portrait } alt={`${ post.name } portrait`}></img>
                            </div>
                            <div className="info-box">
                                <h2>{ post.name }</h2>
                                <div className="info-box-container">
                                    <div className="info-box-section">
                                        <p className="label">Birthname</p>
                                        <p>{ post.birthname }</p>
                                        <p className="label">Hán tự</p>
                                        <p>{ post.hantu }</p>
                                        <p className="label">Occupation</p>
                                        <p>{ post.celebType }</p>
                                    </div>
                                    <div className="info-box-section">
                                        <p className="label">Born</p>
                                        <p>
                                            <Moment format="MMMM DD, YYYY">{ post.born }</Moment>
                                        </p>
                                        <p className="label">Birthplace</p>
                                        <p>{ post.birthplace }, Việt Nam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="celeb-post-content">
                            <ReactMarkdown>{ post.content }</ReactMarkdown>
                        </p>
                        </>
                    :
                    <>
                        <p className="post-content">
                            <ReactMarkdown>{ post.content }</ReactMarkdown>
                        </p> 
                    </>
                    }
                </article>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    const postData = await fetchAPI(`posts`)

    const posts = postData['data']
    const post = []
  
    function getPosts() {
      for(let i in posts) {
        post.push(posts[i].attributes)
      }
      return post
    }
    
    getPosts();

    return {
        paths: post.map(({ slug }) => ({
            params: {
                slug: slug,
            }
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await fetchAPI(`posts?filters[slug][$eq]=${ params.slug }`)
    //const celebType = await fetchAPI(`celebType?filters[celeb][$eq]=${ params.slug }`)

    return {
        props: { 
            postData
        },
        revalidate: 60,
    }
}