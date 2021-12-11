import Head from "next/head";
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function BlogPosts ({ postData }) {
    var post = postData;

    return (
        <div className="page-post">
            <Head>
                <title>{ post.title }</title>
                <meta name="description" content={ post.description } />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <article className="page-container">
                    <p className="post-date">{ post.date }</p>
                    <h1 className="highlight">{ post.title }</h1>
                    { post.celebrity === true ? 
                        <>
                        <div className="celebrity-top">
                            <div className="portrait-container">
                                <img src={ post.portrait } alt={ post.name }></img>
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
                                        <p>{ post.celebrityType }</p>
                                    </div>
                                    <div className="info-box-section">
                                        <p className="label">Born</p>
                                        <p>{ post.born }</p>
                                        <p className="label">Birthplace</p>
                                        <p>{ post.birthplace }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="celeb-post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} /> 
                        </>
                    :
                    <>
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} /> 
                    </>
                    }
                </article>
            </main>
        </div>
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
          postData
        }
    }
}