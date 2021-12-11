import Head from "next/head";

export default function Resources () {
    return (
        <div className="page-post">
            <Head>
                <title>Resources</title>
                <meta name="description" content="Vietnamese culture, language, history, and viet phuc resources Moon Fish" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <article className="page-container">
                    <h1 className="highlight">Resources</h1>
                    <h2>Hán-Nôm 漢喃</h2>
                    <ul>
                        <li><a href="https://www.hannom-rcv.org/font.html" target="_blank" rel="noreferrer">Hán-Nôm Fonts</a></li>
                        <li><a href="http://www.nomfoundation.org/?uiLang=en" target="_blank" rel="noreferrer">Nôm Foundation</a></li>
                    </ul>
                    <h2>Việt Phục 越服</h2>
                    <ul>
                        <li><a href="https://www.facebook.com/gr8vietnam/" target="_blank" rel="noreferrer">Great Vietnam 大越南</a></li>
                        <li><a href="https://www.facebook.com/Hoanien.concept/" target="_blank" rel="noreferrer">Hoa Niên</a></li>
                        <li><a href="https://www.facebook.com/vstyle.vietcophuc/" target="_blank" rel="noreferrer">V'style - Việt Cổ Phục Cách Tân</a></li>
                        <li><a href="https://www.facebook.com/ctcpyvanhien/" target="_blank" rel="noreferrer">Ỷ VÂN HIÊN 倚雲軒</a></li>
                    </ul>
                </article>
            </main>
        </div>
    )
}